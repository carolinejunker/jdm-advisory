import { NextRequest, NextResponse } from "next/server";

const CLIENTS: Record<string, { password: string; cookieName: string; tokenValue: string }> = {
  obermark: {
    password: "obermark2026",
    cookieName: "mandanten_obermark_auth",
    tokenValue: "valid_obermark_2026",
  },
};

export async function POST(request: NextRequest) {
  try {
    const { password, client } = await request.json();

    const config = CLIENTS[client];
    if (!config) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    if (password !== config.password) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set(config.cookieName, config.tokenValue, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
