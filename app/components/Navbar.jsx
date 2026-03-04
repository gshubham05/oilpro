"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center mt-3">
      <div
        className="flex items-center justify-between bg-black/60 backdrop-blur-lg 
      rounded-xl px-8 py-4 w-[90%] max-w-6xl"
      >
        {/* Logo */}
      <Link
        href="/"
        className="text-white hover:text-yellow-400 transition flex justify-center items-center text-xl font-bold"
      >
        <h1>OilPro</h1>
        <Logo />
      </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex border border-zinc-800 px-8 py-4 gap-8 text-gray-300 font-medium">
          <Link className="hover:text-yellow-400 transition" href="/">
            Home
          </Link>
          <Link className="hover:text-yellow-400 transition" href="/about">
            About
          </Link>
          <Link
            className="hover:text-yellow-400 transition"
            href="/well-control"
          >
            Well Control
          </Link>
          <Link className="hover:text-yellow-400 transition" href="/drilling">
            Drilling
          </Link>
        </div>

        <div className="hidden md:flex hover:text-yellow-400 transition">
          <Link href='/admin/login'>Login</Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
