import { NextResponse } from "next/server";
import getMongoClient from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    name.length > 100 ||
    email.length > 254 ||
    message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { error: "Please provide a valid name, email and message." },
      { status: 400 },
    );
  }

  try {
    const client = await getMongoClient();
    const database = process.env.MONGODB_DB;
    if (!database) {
      throw new Error("Missing MONGODB_DB environment variable");
    }

    await client.db(database).collection("contact_messages").insertOne({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Unable to save contact message:", error);
    return NextResponse.json(
      { error: "Unable to save your message right now." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
