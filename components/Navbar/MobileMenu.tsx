"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import MainLinks from "./MainLinks";
import NavUserMenu from "./NavUserMenu";
import { NavbarProps } from "./Navbar";

function MobileMenu({ user }: NavbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="md:hidden relative">
      {showMobileMenu ? (
        <MdClose onClick={() => setShowMobileMenu(false)} />
      ) : (
        <FiMenu
          className="cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      )}
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
            <NavUserMenu user={user} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
