"use server";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export default async function createUser(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const existedUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existedUser) {
        throw new Error("You are already a member");
      }
      const hashedPassword = await bcrypt.hash(password, 12);

      await prisma.user.create({
        data: { name: name, email: email, hashedPassword: hashedPassword },
      });
      revalidatePath("/");
    } catch (existedUser) {
      return { existedUser: "You are already a member, please sign in" };
    }
  } catch (error) {
    console.error(error);
  }
}
