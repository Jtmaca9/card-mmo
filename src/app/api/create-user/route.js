import { createUser } from "@/modules/db/createUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  const response = await createUser(req);
  return NextResponse.json(
    { message: response.message },
    { status: response.status }
  );
}
