import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
  const params = request.nextUrl.searchParams;
  const query = params.get("query");
  return NextResponse.json(
    { response: query },
    { status: 200 }
  )
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const params = await request.json();
  return NextResponse.json(
    { message: params },
    { status: 200 },
  )
}