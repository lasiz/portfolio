import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/constant/profile";
import { projects } from "@/constant/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name}, ${profile.jobTitle}`,
  description: profile.shortDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name}, ${profile.jobTitle}`,
    description: profile.shortDescription,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: "uz_UZ",
    type: "profile",
    firstName: "Laziz",
    lastName: "Tojiboyev",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}, ${profile.jobTitle}`,
    description: profile.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${profile.siteUrl}#person`,
        name: profile.name,
        alternateName: profile.alternateName,
        jobTitle: profile.jobTitle,
        description: profile.shortDescription,
        url: profile.siteUrl,
        sameAs: [
          profile.sameAs.github,
          profile.sameAs.linkedin,
          profile.sameAs.telegram,
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: profile.location,
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: profile.education,
        },
        knowsAbout: profile.knowsAbout,
      },
      ...projects.map((project) => ({
        "@type": project.schemaType,
        "@id": `${project.url}#item`,
        name: project.name,
        url: project.url,
        description: project.description,
        ...(project.applicationCategory && {
          applicationCategory: project.applicationCategory,
        }),
        ...(project.operatingSystem && {
          operatingSystem: project.operatingSystem,
        }),
        ...(project.inLanguage && {
          inLanguage: project.inLanguage,
        }),
        author: {
          "@id": `${profile.siteUrl}#person`,
        },
      })),
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#0b0d10] text-[#e6edf3] min-h-screen antialiased flex flex-col justify-between selection:bg-blue-500/20 selection:text-blue-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
