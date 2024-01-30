import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import UserLinks from "./UserLinks";

function NavUserMenu() {
  const [user, setUser] = useState(true);

  return (
    <div className="md:absolute top-7 flex flex-col md:gap-4 gap-6 text-white text-sm text-center right-0 bg-slate-800 px-7 md:py-5 rounded-md z-40">
      {user ? (
        <>
          <UserLinks />
          <button
            className="whitespace-nowrap"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link className="whitespace-nowrap" href="/sign-in">
            Log In
          </Link>

          <Link href="/sign-up" className="whitespace-nowrap">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}

export default NavUserMenu;
