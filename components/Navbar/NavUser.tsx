"use client";

import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import NavUserMenu from "./NavUserMenu";

function NavUser() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="relative md:block hidden">
      <AiOutlineUser
        className="cursor-pointer"
        onClick={() => setShowUserMenu((prev) => !prev)}
      />
      {showUserMenu && <NavUserMenu />}
    </div>
  );
}

export default NavUser;
