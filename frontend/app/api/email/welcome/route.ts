import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}));

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const { error } = await getResend().emails.send({
    from: "Earnflow AI <hello@earnflow.ai>",
    to: email,
    subject: "You're in — here's where to start",
    html: buildWelcomeEmail(),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function buildWelcomeEmail(): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f0d0b;font-family:-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0d0b;padding:48px 24px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#161310;border-radius:12px;border:1px solid #2a2622;padding:48px 40px;">
        <tr><td>
          <p style="margin:0 0 32px;font-size:13px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#f59e0b;">Earnflow AI</p>
          <h1 style="margin:0 0 16px;font-size:28px;font-weight:700;line-height:1.2;color:#f5f0e8;">Welcome to the playbook.</h1>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#a8a097;">You now have access to guides, scripts, and systems from a top TikTok Shop creator. Start with the guides below.</p>
          <a href="https://earnflow.ai/guides" style="display:inline-block;background:#f59e0b;color:#0f0d0b;text-decoration:none;padding:14px 28px;border-radius:100px;font-size:14px;font-weight:600;">Read the guides</a>
          <p style="margin:32px 0 0;font-size:13px;color:#a8a097;line-height:1.6;">You're getting this because you signed up at earnflow.ai. <a href="#" style="color:#a8a097;">Unsubscribe</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
