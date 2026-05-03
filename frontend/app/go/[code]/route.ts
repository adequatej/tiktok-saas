import { type NextRequest, NextResponse } from "next/server";
import { getAffiliateLink } from "@/lib/affiliates";

// TODO(step-1.6): replace stub with Supabase insert
async function recordClick(_code: string, _referrer: string | null) {
  // await supabase.from("affiliate_clicks").insert({ code, referrer })
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

  await recordClick(code, req.headers.get("referer"));

  return NextResponse.redirect(link.destination, { status: 302 });
}
