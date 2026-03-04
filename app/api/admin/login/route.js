import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {

  const body = await req.json();
  const { email, password } = body;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  // check email
  if (email !== adminEmail) {
    return NextResponse.json({ message: "Invalid email" }, { status: 401 });
  }

  // check password
  const isMatch = await bcrypt.compare(password, adminPasswordHash);

  if (!isMatch) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  // create token
  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // response create
  const response = NextResponse.json({
    success: true,
    message: "Login successful"
  });

  // cookie set
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24
  });

  return response;
}