import { userLinks } from "@/data/data";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";

function UserLinks() {
  return (
    <>
      {userLinks.map((link, index) => (
        <Link href={link.route} key={index}>
          {link.label === "Orders" ? <CgShoppingCart /> : <GrFavorite />}
        </Link>
      ))}
    </>
  );
}

export default UserLinks;
