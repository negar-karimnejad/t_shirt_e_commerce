import prisma from "@/lib/prismadb";
import getUserSession from "./getUserSession";

const GetCurrentUser = async () => {
  try {
    const session = await getUserSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }
  } catch (error: any) {
    return null;
  }
};

export default GetCurrentUser;
