import { mainLinks } from "@/data/data";
import Link from "next/link";

function MainLinks() {
  return (
    <>
      {mainLinks.map((link, index) => (
        <Link href={link.route} key={index}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default MainLinks;
