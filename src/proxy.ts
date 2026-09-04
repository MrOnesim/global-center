import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 30;

function getIP(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous"
  );
}

export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const ip = getIP(request);
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && entry.resetAt > now) {
    if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessayez dans 1 minute." },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  for (const [key, val] of rateLimit.entries()) {
    if (val.resetAt <= now) rateLimit.delete(key);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
