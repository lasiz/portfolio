import React from "react";
import { profile } from "@/constant/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#21262d] py-10 mt-16 text-sm text-[#8b949e]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={profile.sameAs.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.sameAs.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.sameAs.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Telegram
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-xs text-[#6e7681]">
          © {new Date().getFullYear()} {profile.name} • {profile.location}
        </p>
      </div>
    </footer>
  );
}
