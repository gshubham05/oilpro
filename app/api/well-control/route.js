import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import WellControl from "@/models/WellControl";
import { verifyToken } from "@/middleware/authMiddleware";

export async function POST(req) {
  await connectDB();
  try {
    // await verifyToken(req);
    const data = await req.json();
    const article = await WellControl.create(data);
    console.log("data ",data)
    console.log("article ",article)
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}

export async function GET() {
  await connectDB();
  const articles = await WellControl.find().sort({ createdAt: -1 });
  return NextResponse.json(articles);
}
