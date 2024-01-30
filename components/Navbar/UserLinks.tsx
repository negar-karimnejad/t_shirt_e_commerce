import { userLinks } from "@/data/data";
import Link from "next/link";

function UserLinks() {
  return (
    <div className="flex flex-col text-sm text-center md:gap-4 gap-6">
      {userLinks.map((link, index) => (
        <Link href={link.route} key={index}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default UserLinks;
