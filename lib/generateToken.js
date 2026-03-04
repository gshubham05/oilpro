import jwt from "jsonwebtoken";

export function generateToken(id) {

  return jwt.sign({ id, role: "admin" },process.env.JWT_SECRET);

}