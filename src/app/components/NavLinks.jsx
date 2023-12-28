import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function NavLinks({ href, title, setNavbarOpen }) {
  return (
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-slate-400 text-lg hover:text-gray-300 cursor-pointer"
      onClick={() => setNavbarOpen && setNavbarOpen(false)}
    >
      {title}
    </ScrollLink>
  );
}
