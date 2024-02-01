"use client";
import CartIcon from "@/app/(shoppingcart)/components/ui/CartIcon";
import { User } from "@prisma/client";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";
import { TbBracketsAngle } from "react-icons/tb";
import MainLinks from "./MainLinks";
import MobileMenu from "./MobileMenu";
import NavUser from "./NavUser";

export type NavbarProps = {
  user: User;
};

function Navbar({ user }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between border-b py-4 sticky top-0 right-0 main-container bg-white z-50">
      <Link href="/">
        <h1 className="font-bold text-lg flex items-center gap-1">
          DEV-THREADS
          <TbBracketsAngle />
        </h1>
      </Link>

      <div className="md:flex hidden gap-8 font-bold text-gray-500">
        <MainLinks />
      </div>

      <div className="flex items-center gap-5 text-xl">
        <CartIcon />
        <GrFavorite />
        <NavUser user={user} />
        <MobileMenu user={user} />
      </div>
    </nav>
  );
}

export default Navbar;
