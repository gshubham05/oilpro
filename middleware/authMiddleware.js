import jwt from "jsonwebtoken";

export async function verifyToken(req) {

  const cookie = req.headers.get("cookie");

  if (!cookie) {
    throw new Error("No token provided");
  }

  const token = cookie
    .split("; ")
    .find(row => row.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    throw new Error("Token missing");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return decoded;
}