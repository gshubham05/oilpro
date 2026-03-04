
import connectDB from "@/lib/dbConnect";
import Drilling from "@/models/Drilling";

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const article = await Drilling.create(body);

  return Response.json(article);
}


export async function GET() {
  await connectDB();

  const articles = await Drilling.find().sort({ createdAt: -1 });

  return Response.json(articles);
}