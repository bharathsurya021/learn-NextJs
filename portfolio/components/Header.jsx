"use client";
import React, { useState } from "react";
import { links } from "../lib/data";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="z-[999] relative">
      <nav className="fixed flex items-center justify-between p-5 h-[5rem] w-full border-white border-opacity-40 bg-white bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:h-[5rem]">
        <Link href={"/"} className="font-bold text-2xl tracking-widest">
          DEV<span className="text-orange-600">N</span>
          <span className="text-blue-600">UX</span>
        </Link>
        <div className="flex justify-center items-center">
          {/* Menu button */}
          <button
            onClick={toggleMenu}
            className="text-xl lg:hidden focus:outline-none"
          >
            Menu
          </button>

          {/* Navigation links */}
          <ul
            className={`${
              showMenu ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:ml-5 mr-5`}
          >
            {links.map(({ label, path }) => (
              <li
                key={path}
                className="my-2 lg:my-0 lg:ml-5 text-gray-900 hover:text-blue-400 transition"
              >
                <Link href={path} className="text-xl">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="text-xl text-gray-50 py-2 px-3 focus:outline-none bg-gray-900 rounded">
            Contact Me
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
