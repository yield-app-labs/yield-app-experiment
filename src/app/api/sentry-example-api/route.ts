import { NextResponse } from "next/server";

// A faulty API route to test Sentry's error monitoring
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (Number(id) === 1) {
    throw new Error("Sentry Example API Route Error");
  }
  NextResponse.json({ name: "John Doe" }, { status: 200 });
}
