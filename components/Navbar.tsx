import React from "react";
import Link from "next/link";
import { profile } from "@/constant/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#21262d] bg-[#0b0d10]/85 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight hover:text-sky-400 transition-colors group"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#161b22] border border-[#21262d] text-xs font-bold font-mono tracking-tighter group-hover:border-sky-500/50 transition-colors select-none">
            <span className="text-white">L</span>
            <span className="text-sky-400">T</span>
          </span>
          <span>{profile.name}</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-[#8b949e]">
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            Haqida
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors"
          >
            Loyihalar
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-white bg-[#21262d] hover:bg-[#30363d] px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors"
          >
            Aloqa
          </a>
        </nav>
      </div>
    </header>
  );
}

