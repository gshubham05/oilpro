import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";
import { generateToken } from "@/lib/generateToken";

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return NextResponse.json({ message: "Invalid Email" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return NextResponse.json({ message: "Invalid Password" }, { status: 401 });
  }

  const token = generateToken(admin._id);

  return NextResponse.json({
    token,
    message: "Login Successful",
  });
}