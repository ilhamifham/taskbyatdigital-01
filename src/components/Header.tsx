import Link from "next/link";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { asLink } from "@prismicio/client";

import Nav from "./Nav";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");
  const links = header.data.nav_links.map((link) => {
    return {
      key: link.key,
      url: asLink(link),
      text: link.text,
    };
  });

  return (
    <header className="bg-white sticky w-full z-20 top-0 border-b border-b-hover">
      <div className="max-w-header flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <PrismicNextImage field={header.data.logo} className="w-46.25" />
        </Link>
        <Nav navLinks={links} />
      </div>
    </header>
  );
}
