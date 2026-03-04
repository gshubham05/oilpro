import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

await mongoose.connect("mongodb://127.0.0.1:27017/drilling");

const email = "ankit.xtra";
const password = "admin123";

const existingAdmin = await Admin.findOne({ email });

if (existingAdmin) {
  console.log("Admin already exists");
  process.exit();
}

const hashedPassword = await bcrypt.hash(password, 10);

await Admin.create({
  email,
  password: hashedPassword
});

console.log("Admin Created");

process.exit();