import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const client = await clientPromise;

  const result = await client
    .db()
    .collection<ClickDoc>("clicks")
    .findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return NextResponse.json({ count: result?.count ?? 1 });
}
