"use client";

import {
  Cross1Icon,
  DownloadIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="flex p-4 justify-between items-center">
        <Link href="/">
          <h3>My Portfolio</h3>
        </Link>

        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="/CV_Meisya Amanda Aldi.pdf"
          download="CV-Meisya Amanda Aldi.pdf"
          className="hidden md:flex bg-blue-950 px-4 py-2 rounded-lg items-center gap-2"
        >
          <DownloadIcon />
          Download CV
        </a>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <Cross1Icon className="w-6 h-6" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col p-4 gap-4 border-t border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/CV_Meisya Amanda Aldi.pdf"
            download="CV-Meisya Amanda Aldi.pdf"
            className="bg-blue-950 px-4 py-2 rounded-lg flex items-center gap-2 w-fit"
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

export default Navigation;
