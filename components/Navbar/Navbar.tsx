import { mainLinks, userLinks } from "@/data/data";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";

function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-6xl mx-auto border-b py-4 px-10 md:px-0">
      <Link href="/">
        <h1 className="font-semibold">DEV-THREADS{"<>"}</h1>
      </Link>
      <div className="md:flex hidden gap-8">
        {mainLinks.map((link, index) => (
          <Link href={link.route} key={index}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5 text-xl">
        {userLinks.map((link, index) => (
          <Link href={link.route} key={index}>
            {link.label === "Orders" ? <CgShoppingCart /> : <GrFavorite />}
          </Link>
        ))}
        <AiOutlineUser />
      </div>
    </nav>
  );
}

export default Navbar;
