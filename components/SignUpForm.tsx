"use client";

import createUser from "@/app/(auth)/actions/AuthActions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { TbBracketsAngle } from "react-icons/tb";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";

function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const session = useSession();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (session.status === "authenticated") {
      toast.error("You are already signed in");
      router.push("/");
    }
  }, [session.status, router]);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    const result = await createUser(formData);

    if (result?.existedUser) {
      toast.error(result?.existedUser);
    } else {
      toast.success("Welcome🎉 Please Sign In");
      ref.current?.reset();
      router.push("/sign-in");
    }
    setIsSubmitting(false);
    console.log(result);
  };

  return (
    <div className="p-5 rounded-md border flex flex-col gap-5 max-w-xl main-container">
      <header className="bg-slate-800 text-white text-lg font-semibold p-3 rounded-md flex items-center justify-center gap-2 ">
        <h1>JOIN THE DT AQUAD</h1>
        <TbBracketsAngle />
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}
        ref={ref}
        className="flex flex-col gap-5 mt-5"
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">Name</Label>
          <Input disabled={isSubmitting} type="text" id="name" name="name" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <Input disabled={isSubmitting} type="email" id="email" name="email" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Password</Label>
          <Input
            disabled={isSubmitting}
            type="password"
            id="password"
            name="password"
          />
        </div>

        <div>
          <Button type="submit">Create Account</Button>
        </div>
      </form>
      <p className="flex items-center gap-1">
        Already have an account?
        <Link href="sign-in" className="hover:underline">
          Sign in &#8594;
        </Link>
      </p>
    </div>
  );
}

export default SignUpForm;
