import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { getAffiliateLink } from "@/lib/affiliates";
import type { Database } from "@/lib/supabase/types";

function createServiceClient() {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  );
}

async function recordClick(code: string, req: NextRequest) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return;
  const supabase = createServiceClient();
  await supabase.from("affiliate_clicks").insert({
    code,
    referer: req.headers.get("referer"),
    user_agent: req.headers.get("user-agent"),
  });
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params;
  const link = getAffiliateLink(code);

  if (!link) {
    return NextResponse.redirect(new URL("/guides", req.url), { status: 302 });
  }

  // Fire-and-forget - don't await so redirect isn't delayed
  recordClick(code, req).catch(() => {});

  return NextResponse.redirect(link.destination, { status: 302 });
}
