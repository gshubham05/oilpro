import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import WellControl from "@/models/WellControl";
import { verifyToken } from "@/middleware/authMiddleware";

// ================= GET ONE =================
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;

    const article = await WellControl.findById(id);

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching article" },
      { status: 500 }
    );
  }
}

// ================= UPDATE =================
export async function PUT(req, { params }) {
  try {
    await connectDB();
    await verifyToken(req);

    const { id } = params;
    const data = await req.json();

    const updated = await WellControl.findByIdAndUpdate(id, data, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: "Update failed" }, { status: 500 });
  }
}

// ================= DELETE =================
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    await verifyToken(req); // protect admin

    const { id } = params;

    await WellControl.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({ message: "Delete failed" }, { status: 500 });
  }
}
