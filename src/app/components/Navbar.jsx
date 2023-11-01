"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverly from "./MenuOverly";
const navLinksdata = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#Skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 bg-[#121212] z-10 bg-opacity-100 ">
      <div className="flex flex-wrap  items-center justify-between mx-auto py-6 px-10">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          suvankar
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  text-slate-200 "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" flex itemx-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  text-slate-200 "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinksdata.map((navLink, id) => (
              <li key={id}>
                <NavLinks href={navLink.path} title={navLink.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverly links={navLinksdata} /> : null}
    </nav>
  );
}
