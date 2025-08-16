"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import { PrismicNextLink } from "@prismicio/next";

export default function Nav({ navLinks }: { navLinks: any }) {
  const [toggleNav, setToggleNav] = useState(false);
  const currentPath = usePathname();
  const activeClass = "bg-brand text-white md:text-brand md:bg-transparent";
  const unActiveClass = "text-slate-700 hover:bg-gray-100 md:hover:text-brand";
  const baseClass = "block py-2 px-3 rounded-sm md:p-0 md:hover:bg-transparent";

  function handleToggleNav() {
    setToggleNav((prevToggleNav) => !prevToggleNav);
  }

  return (
    <>
      <button
        className="inline-flex items-center w-8 h-8 justify-center text-sm text-brand rounded-sm cursor-pointer md:hidden hover:bg-gray-100"
        aria-controls="nav"
        aria-expanded={toggleNav}
        onClick={handleToggleNav}
      >
        <span className="sr-only">{toggleNav ? "Open main menu" : "Close main menu"}</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <nav
        id="nav"
        className={`${toggleNav ? "visible opacity-100 h-auto" : "invisible opacity-0 h-0"} items-center justify-between w-full duration-300 md:flex md:w-auto md:order-1 md:h-auto md:visible md:opacity-100`}
      >
        <ul className="flex flex-col md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white">
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
