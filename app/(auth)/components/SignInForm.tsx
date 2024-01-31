import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";

function SignInForm() {
  return (
    <div className="p-5 rounded-md border flex flex-col gap-5 max-w-xl main-container">
      <header className="text-3xl font-semibold">
        <h1>Sign in</h1>
      </header>
      <form action="" className="flex flex-col gap-5 mt-5">
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
