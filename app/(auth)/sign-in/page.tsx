import SignInForm from "@/app/(auth)/components/SignInForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GetCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const user = await GetCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  return (
    <div className="my-10 ">
      <SignInForm />
    </div>
  );
};

export default page;
