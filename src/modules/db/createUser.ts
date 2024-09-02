import { getSession } from "@auth0/nextjs-auth0";
import prisma from "./db";
import { NextApiRequest, NextApiResponse } from "next";

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getSession(req, res);
    if (!session || !session.user) {
      return { status: 401, message: "Unauthorized" };
    }

    const user = session.user;

    const existingUser = await prisma.user.findUnique({
      where: { auth0Id: user.sub },
    });

    if (existingUser) {
      return { status: 409, message: "User already exists" };
    }

    await prisma.user.create({
      data: {
        auth0Id: user.sub,
        email: user.email,
        name: user.name,
      },
    });

    return { status: 200, message: "User created successfully" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error" };
  }
}
