"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="relative z-10 w-full bg-orange-500 text-white">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        {/* Logo */}
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>

        {/* Responsive/Nav: small */}
        <div className="text-2xl sm:hidden">
          {menu === false ? <button onClick={handleMenu}>+</button> : <button onClick={handleMenu}>-</button>}
        </div>

        {/* Nav Items */}
        <div className="hidden sm:block">
          <NavItem />
        </div>

        {/* Responsive/NavItems: small */}
        <div className="block sm:hidden">{menu === false ? null : <NavItem mobile />}</div>
      </div>
    </nav>
  );
};

export default Navbar;
