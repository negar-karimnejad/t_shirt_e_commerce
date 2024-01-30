"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

function NavUser() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="relative md:block hidden">
      <AiOutlineUser
        className="cursor-pointer"
        onClick={() => setShowUserMenu((prev) => !prev)}
      />
      {showUserMenu && (
        <div className="absolute top-7 text-white text-sm text-center right-0 bg-slate-800 px-6 py-3 rounded-md z-40">
          <Link className="whitespace-nowrap" href="/login">
            Log In
          </Link>
          <button className="whitespace-nowrap mt-2" onClick={() => signOut()}>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}

export default NavUser;
