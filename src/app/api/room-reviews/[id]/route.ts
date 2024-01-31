import { getRoomReviews } from "@/libs/apis";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const roomId = params.id;

  try {
    const reviews = await getRoomReviews(roomId);

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.log("Getting review failed", error);
    return new NextResponse("Unable to fetch", { status: 400 });
  }
}
