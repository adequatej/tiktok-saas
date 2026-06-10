import { createServiceClient } from "@/lib/supabase/service";

const adminUserIds = (process.env.ADMIN_USER_IDS ?? "")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean);

export async function hasGuideAccess(userId: string | null): Promise<boolean> {
  if (!userId) return false;
  if (adminUserIds.includes(userId)) return true;

  const supabase = createServiceClient();
  const { data } = await supabase
    .from("purchases")
    .select("id")
    .eq("clerk_user_id", userId)
    .maybeSingle();

  return !!data;
}
