export interface Profile {
  name: string;
  alternateName: string[];
  jobTitle: string;
  experienceSince: number;
  location: string;
  education: string;
  siteUrl: string;
  email: string;
  sameAs: {
    github: string;
    linkedin: string;
    telegram: string;
  };
  knowsAbout: string[];
  shortDescription: string;
  aboutText: string;
  lastUpdated: string; // Haqiqiy sana (har safar new Date() yozilmasligi uchun)
  getExperienceYearsText: () => string;
}

export const profile: Profile = {
  // TODO: "Tojiboyev" yoki "Tojiboev", bittasini tanlayman, hamma joyda bir xil
  name: "Laziz Tojiboyev",
  alternateName: [
    "Laziz",
    "Lasiz",
    "Lazizbek",
    "Lazizbek tojiboyev",
    "Laziz tojiboev",
  ],
  jobTitle: "Full stack SI engineer",
  experienceSince: 2022,
  location: "Uzbekistan",
  education: "Digital Economy, Fergana State Technical University",
  // TODO: lazizbe.uz ishlasa shuni asosiy qilaman, netlify'dan 301 redirect
  siteUrl: "https://laziz-dev.netlify.app",
  email: "laziz.core@gmail.com",
  sameAs: {
    github: "https://github.com/lazizbekdev",
    linkedin: "https://www.linkedin.com/in/lazizbe/",
    telegram: "https://t.me/corefold",
  },
  knowsAbout: [
    "Full Stack Development",
    "Systems Integration",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Web Applications",
    "Chrome Extensions",
    "Frontend Architecture",
  ],
  shortDescription:
    "Laziz Tojiboyev – Full stack SI engineer based in Uzbekistan. Building robust web applications, browser extensions, and integrations since 2022.",
  aboutText:
    "Full stack Systems Integration (SI) engineer with continuous experience since 2022. Focused on building high-performance web applications, browser extensions, and scalable system integrations. Graduated in Digital Economy from Fergana State Technical University.",
  lastUpdated: "2026-10-28",
  getExperienceYearsText: () => {
    const years = Math.max(1, new Date().getFullYear() - 2022);
    return `${years}+ years`;
  },
};

