"use client";

import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import NavUserMenu from "./NavUserMenu";
import { NavbarProps } from "./Navbar";

function NavUser({ user }:NavbarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="relative md:block hidden">
      <AiOutlineUser
        className="cursor-pointer"
        onClick={() => setShowUserMenu((prev) => !prev)}
      />
      {showUserMenu && <NavUserMenu user={user} />}
    </div>
  );
}

export default NavUser;
