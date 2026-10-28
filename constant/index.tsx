import { profile } from "./profile";

export * from "./profile";
export * from "./projects";

export const Social_Icons = [
  {
    link: profile.sameAs.github,
    image: "/Github.svg",
    alt: "GitHub",
  },
  {
    link: profile.sameAs.linkedin,
    image: "/LinkedIn.svg",
    alt: "LinkedIn",
  },
  {
    link: profile.sameAs.telegram,
    image: "/telegram.svg",
    alt: "Telegram",
  },
];
