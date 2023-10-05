import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="flex w-full">
      <nav className="flex items-center justify-between w-full h-16 p-4 mx-auto md:max-w-7xl sm:px-8">
        <h3 className="text-2xl font-bold">HTOES FILM</h3>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link href={"/"} className="">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
