import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/route";

export default async function getUserSession() {
  return await getServerSession(authOptions);
}
