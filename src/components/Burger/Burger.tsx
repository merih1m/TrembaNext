"use client";
import Nav from "@/components/Header/component/Nav/Nav";
import { navLinks } from "../Header/component/Nav/navLinks";
import { useState } from "react";

export default function Burger({}: {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const handleCloseMenu = () => setIsMenuOpen(false);
  return (
    <div className="relative md:hidden">
      <button
        onClick={handleMenuToggle}
        className="text-white cursor-pointer focus:outline-none"
      >
        &#9776;
      </button>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-headerBg shadow-md flex flex-col justify-center items-center text-4xl gap-y-4 py-6 px-4 z-50"
          onClick={handleCloseMenu}
        >
          <div
            className="flex flex-col gap-y-2"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            <Nav
              text={navLinks.map((text) => text.text)}
              link={navLinks.map((link) => link.link)}
              className="flex flex-col gap-y-2"
              isHeader={true}
              onClick={handleCloseMenu}
            />
          </div>
        </div>
      )}
    </div>
  );
}
