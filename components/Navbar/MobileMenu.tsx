"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import MainLinks from "./MainLinks";
import { useState } from "react";

function MobileMenu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="md:hidden relative">
      <FiMenu
        className="cursor-pointer"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      />
      {showMobileMenu && (
        <div
          className="w-full h-screen fixed right-0 top-5"
          onClick={() => setShowMobileMenu(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 text-white flex flex-col gap-6 py-10 rounded-sm text-base absolute right-0 top-8 text-center w-48"
          >
            <MainLinks />
            <Link className="whitespace-nowrap" href="/login">
              Log In
            </Link>
            <button
              className="whitespace-nowrap mt-2"
              onClick={() => {
                signOut(), setShowMobileMenu(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
