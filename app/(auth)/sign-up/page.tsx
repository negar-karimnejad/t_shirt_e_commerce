import SignUpForm from "@/app/(auth)/components/SignUpForm";
import { useEffect } from "react";
import GetCurrentUser from "../actions/getCurrentUser";
import { useRouter } from "next/navigation";

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
    <div className="my-10">
      <SignUpForm />
    </div>
  );
};

export default page;
