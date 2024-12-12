import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  ResumeIcon,
  SourceCodeIcon,
} from "@/assets/icons";
import { Button } from "@headlessui/react";

const SocialMediaLinks = () => {
  return (
    <div className="flex lg:ml-4 gap-5 items-center">

      <a
        href="https://www.linkedin.com/in/marisa-mini-80389a222/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <LinkedInIcon className="fill-secondary hover:fill-primary w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>

      {/*
      <a href="twitter-coming-soon" target="_blank" aria-label="Twitter">
        <XIcon className="fill-secondary hover:fill-primary w-6 h-6 shrink-0" />
      </a>
      <a href="ig-coming-soon" target="_blank" aria-label="Instagram">
        <InstagramIcon className="fill-secondary hover:fill-primary w-6 h-6 shrink-0" />
      </a>
      */}

      <a
        href="https://github.com/gilarellano/portfolio-website"
        target="_blank"
        aria-label="Source Code"
      >
        <SourceCodeIcon className="stroke-secondary hover:stroke-primary stroke-2 w-7 h-7 lg:w-6 lg:h-6 shrink-0" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
