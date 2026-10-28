import React from "react";
import { profile } from "@/constant/profile";
import { projects } from "@/constant/projects";

export default function Home() {
  const experienceYears = profile.getExperienceYearsText();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-20">
      {/* Hero / Bosh qism */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#161b22] text-[#7ee787] border border-[#238636]/40">
          <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
          <span>{profile.location} • Ishga tayyor</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-[#38bdf8]">
            {profile.jobTitle}
          </p>
        </div>

        <p className="text-base sm:text-lg text-[#8b949e] leading-relaxed max-w-2xl">
          {profile.shortDescription}
        </p>

        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            Email yuborish
          </a>
          <a
            href={profile.sameAs.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#21262d] text-white hover:bg-[#30363d] border border-[#30363d] transition-colors"
          >
            Telegram
          </a>
          <a
            href={profile.sameAs.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#21262d] text-white hover:bg-[#30363d] border border-[#30363d] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.sameAs.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#21262d] text-white hover:bg-[#30363d] border border-[#30363d] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Haqida va Tajriba */}
      <section id="about" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#21262d] pb-3">
          <h2 className="text-2xl font-bold text-white tracking-tight">Haqida</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-[#c9d1d9] leading-relaxed">
            <p>{profile.aboutText}</p>
            <p className="text-sm text-[#8b949e]">
              Dasturlash va tizimlar integratsiyasi sohasida {profile.experienceSince} yildan buyon faoliyat yuritib kelmoqdaman (tajriba: {experienceYears}).
            </p>
          </div>

          <div className="space-y-4 rounded-xl border border-[#21262d] bg-[#12161c] p-5 h-fit">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#8b949e] font-semibold mb-1">
                Ta&apos;lim
              </h3>
              <p className="text-sm font-medium text-white">{profile.education}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#8b949e] font-semibold mb-1">
                Joylashuv
              </h3>
              <p className="text-sm font-medium text-white">{profile.location}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#8b949e] font-semibold mb-1">
                Tajriba
              </h3>
              <p className="text-sm font-medium text-white">
                Since {profile.experienceSince} ({experienceYears})
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b949e] mb-3">
            Asosiy yo&apos;nalishlar va texnologiyalar
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.knowsAbout.map((skill) => (
              <span
                key={skill}
                className="text-xs text-[#c9d1d9] bg-[#161b22] px-3 py-1.5 rounded-md border border-[#30363d] hover:border-[#8b949e] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Loyihalar */}
      <section id="projects" className="space-y-8 scroll-mt-24">
        <div className="border-b border-[#21262d] pb-3 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-white tracking-tight">Loyihalar</h2>
          <span className="text-xs text-[#8b949e] font-mono">
            Jami: {projects.length} ta
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-xl border border-[#21262d] bg-[#12161c] p-6 hover:border-[#38bdf8]/40 hover:bg-[#161c24] transition duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 focus:outline-none focus:underline"
                  >
                    {project.name}
                    <span className="text-sm text-[#8b949e] group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </h3>
                <span className="text-xs font-mono text-[#8b949e] bg-[#21262d] px-2.5 py-1 rounded-md w-fit border border-[#30363d]">
                  {project.role}
                </span>
              </div>

              <p className="text-sm text-[#c9d1d9] leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#8b949e] bg-[#1c2128] px-2 py-0.5 rounded border border-[#30363d]"
                  >
                    {tag}
                  </span>
                ))}
                {project.inLanguage && (
                  <span className="text-xs text-[#58a6ff] bg-[#388bfd1a] px-2 py-0.5 rounded border border-[#388bfd33]">
                    Tillari: {project.inLanguage.join(", ")}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
