import { authOptions } from "@/app/api/auth/route";
import { getServerSession } from "next-auth";

export default async function getUserSession() {
  return await getServerSession(authOptions);
}
