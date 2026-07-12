"use client";

import Link from "next/link";

const links = [
  { name: "Shop", href: "#" },
  { name: "Collections", href: "#" },
  { name: "About", href: "#" },
  { name: "Journal", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-2xl tracking-[0.2em] font-bold uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          BUILT TOUGH
        </Link>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-[0.15em] text-gray-300 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="rounded-full border border-white px-5 py-2 text-sm transition hover:bg-white hover:text-black">
          Shop
        </button>

      </nav>
    </header>
  );
}