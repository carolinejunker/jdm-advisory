import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Mandanten: Obermark password gate ---
  if (
    pathname.startsWith("/mandanten/obermark") &&
    !pathname.startsWith("/mandanten/obermark/login")
  ) {
    const token = request.cookies.get("mandanten_obermark_auth")?.value;
    if (token !== "valid_obermark_2026") {
      return NextResponse.redirect(new URL("/mandanten/obermark/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mandanten/obermark/:path*"],
};
