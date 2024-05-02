// pages/api/login.ts

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { enroll, password } = req.body;

    try {
      const student = await prisma.student.findUnique({
        where: { enroll },
      });

      if (!student) {
        return res.status(401).json({ error: "User not found" });
      }

      if (password !== student.password) {
        return res.status(401).json({ error: "Invalid password" });
      }

      // Passwords match, login successful
      return res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error logging in:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
