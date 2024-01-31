"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";

function SignInForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }
      toast.success("Authentication successful");
      router.refresh;
      router.push("/");
    } catch (error: any) {
      toast.error(error.message || "Authentication failed");
    }
  };

  return (
    <div className="p-5 rounded-md border flex flex-col gap-5 max-w-xl main-container">
      <header className="text-2xl font-semibold">
        <h1>Sign in</h1>
      </header>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex flex-col gap-5 mt-5"
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" />
        </div>

        <div>
          <Button type="submit">Login</Button>
        </div>
      </form>
      <p className="flex items-center gap-1">
        {"Don't have an account?"}
        <Link
          href="sign-up"
          className="flex items-center gap-1 hover:underline"
        >
          Create one &#8594;
        </Link>
      </p>
    </div>
  );
}

export default SignInForm;
