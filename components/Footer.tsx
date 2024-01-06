import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex ">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                className="mx-5"
                alt={social.alt}
              />
            </Link>
          );
        })}
      </div>
        <p className="text-gray-300 text-center text-sm">
            🌟 Unleashing the Web&#39;s Magic | Laziz, The Wizard of Frontend 🧙‍♂️
            <br/>

            Dancing in the realms of code, I sculpt digital dreams into reality. Your website&#39;s story deserves to be
            told with pixel-perfect precision and enchanting user experiences.
            <br/>

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            🚀 Launching Tomorrow&#39;s Designs Today | Innovator • Creator • Frontend Sorcerer
        </p>
    </div>
  );
};

export default Footer;
