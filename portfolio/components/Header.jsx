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
    <header className="z-[999] fixed flex items-center justify-between px-4 md:px-12 h-20 w-full border-white border-opacity-40 bg-white bg-opacity-30 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ">
      <Link href={"/"} className="font-bold text-2xl tracking-widest ">
        DEV<span className="text-orange-600">N</span>
        <span className="text-blue-600">UX</span>
      </Link>
      <nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-gray-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <ul
          className={`${
            showMenu ? "block" : "hidden"
          }  fixed left-0 top-20 right-0 min-h-screen bg-white bg-opacity-40 space-y-4 p-4 md:space-y-0 md:space-x-6 md:relative md:flex md:min-h-0 md:items-center md:p-0 md:top-0 md:bg-transparent`}
        >
          {links.map((link) => (
            <li
              key={link.path}
              className="text-gray-900 hover:text-blue-400 transition font-medium"
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
