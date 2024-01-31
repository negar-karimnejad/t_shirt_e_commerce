import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { TbBracketsAngle } from "react-icons/tb";

const page = () => {
  // const handleSignup = async () => {};
  return (
    <div className="p-5 rounded-md border flex flex-col gap-5 max-w-xl main-container my-10">
      <header className="bg-slate-800 text-white text-lg font-semibold p-3 rounded-md flex items-center justify-center gap-2 ">
        <h1>JOIN THE DT AQUAD</h1>
        <TbBracketsAngle />
      </header>
      <form action="" className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" />
        </div>

        <div>
          <Button type="submit">Create Account</Button>
        </div>
      </form>
      <p className="flex items-center gap-1">
        Already have an account?
        <Link href="sign-in" className="flex items-center gap-1">
          Sign in
          <BsArrowRight />
        </Link>
      </p>
    </div>
  );
};

export default page;
