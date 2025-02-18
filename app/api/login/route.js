import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Mock admin user (replace with a database in production)
const adminUser = {
  email: "salim@slowb.tn",
  passwordHash: bcrypt.hashSync("salim1312@@", 10), // Hashed password
};

export async function POST(request) {
  const { email, password } = await request.json();

  if (email !== adminUser.email) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  const isPasswordValid = await bcrypt.compare(password, adminUser.passwordHash);
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  // Create a JWT token
  const token = jwt.sign({ email }, "123456", { expiresIn: "1h" });

  return NextResponse.json({ token });
}