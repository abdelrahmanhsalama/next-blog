"use client";

import { useState } from "react";
import ThemeToggler from "./ThemeToggler";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleOpenNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex gap-2  ">
        <div className="hidden md:block">
          <ThemeToggler />
        </div>
        <div className="md:hidden">
          <button className="text-2xl" onClick={handleOpenNav}>
            ☰
          </button>
        </div>
      </nav>
      {navOpen && (
        <div className="md:hidden w-full h-full bg-white dark:bg-[#090d1f] fixed z-10 flex flex-col gap-8 items-center justify-around left-0 top-0">
          <div></div>
          <div className="flex flex-col items-center gap-8">
            <p className="font-bold text-2xl">Next-Blog</p>
            <ThemeToggler />
          </div>
          <button className="text-4xl" onClick={handleOpenNav}>
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
