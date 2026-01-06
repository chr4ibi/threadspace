"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function signupAction(formData: FormData) {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const name = formData.get("name") as string | null;
  const password = formData.get("password") as string;

  // Validation
  if (!email || !username || !password) {
    return { error: "All required fields must be filled" };
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters" };
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return {
      error: "Username can only contain letters, numbers, and underscores",
    };
  }

  if (username.length < 3 || username.length > 20) {
    return { error: "Username must be between 3 and 20 characters" };
  }

  try {
    // Check if email already exists
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return { error: "Email already registered" };
    }

    // Check if username already exists
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return { error: "Username already taken" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await prisma.user.create({
      data: {
        email,
        username,
        name: name || null,
        password: hashedPassword,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "Failed to create account. Please try again." };
  }
}
