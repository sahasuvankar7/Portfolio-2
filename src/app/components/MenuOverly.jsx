import React from "react";
import NavLinks from "./NavLinks";

function MenuOverly({ links }) {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, id) => (
        <li key={id}>
          <NavLinks href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}

export default MenuOverly;
