"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import { PrismicNextLink } from "@prismicio/next";

export default function Nav({ navLinks }: any) {
  const [toggleNav, setToggleNav] = useState(false);
  const currentPath = usePathname();
  const activeClass = "bg-brand text-white md:text-brand md:bg-transparent";
  const unActiveClass = "text-slate-700 hover:bg-hover md:hover:text-brand md:hover:bg-transparent";
  const baseClass = "block py-2 px-4 rounded-lg md:p-0";

  function handleToggleNav() {
    if (window.innerWidth < 768) setToggleNav((prevToggleNav) => !prevToggleNav);
  }

  return (
    <>
      <button
        className="inline-flex items-center w-8 h-8 justify-center text-sm text-brand rounded-lg cursor-pointer md:hidden hover:bg-hover"
        aria-controls="nav"
        aria-expanded={toggleNav}
        onClick={handleToggleNav}
      >
        <span className="sr-only">{toggleNav ? "Open main menu" : "Close main menu"}</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <nav id="nav" className={`${toggleNav ? "visible opacity-100 h-auto" : "invisible opacity-0 h-0"} w-full md:w-auto md:visible md:opacity-100 md:h-auto`}>
        <ul className="flex flex-col mt-4 font-semibold text-lg md:flex-row md:gap-8 md:mt-0">
          {navLinks.map((link: any) => (
            <li key={link.key}>
              <PrismicNextLink field={link} onClick={handleToggleNav} className={`${link.url === currentPath ? activeClass : unActiveClass} ${baseClass}`} />
            </li>
          ))}
          <li>
            <Link href="contact" className={`${"/contact" === currentPath ? activeClass : unActiveClass} ${baseClass}`} onClick={handleToggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
