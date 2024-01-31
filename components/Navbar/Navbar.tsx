import Link from "next/link";
import { TbBracketsAngle } from "react-icons/tb";
import MainLinks from "./MainLinks";
import MobileMenu from "./MobileMenu";
import { CgShoppingCart } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import NavUser from "./NavUser";
import { User } from "@prisma/client";

type NavbarProps = {
  user: User;
};

function Navbar({ user }: NavbarProps) {
  console.log("😎USER:", user);

  return (
    <nav className="flex items-center justify-between border-b py-4 stick top-0 main-container">
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
        <CgShoppingCart />
        <GrFavorite />
        <NavUser />
        <MobileMenu />
      </div>
    </nav>
  );
}

export default Navbar;
