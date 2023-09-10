import { JSX, SVGProps } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const navigation = {
  main: [
    { name: "About Me", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Speaking", href: "#" },
    { name: "Privacy & Cookie Policy", href: "#" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/davideimola",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/davideimola",
      icon: faLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/davideimola",
      icon: faInstagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/davideimola",
      icon: faTwitter,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <FontAwesomeIcon
              key={item.name}
              href={item.href}
              className="h-6 w-6 text-white hover:text-gray-300"
              icon={item.icon}
            />
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-white">
          &copy; 2023 Davide Imola All rights reserved.
        </p>
      </div>
    </footer>
  );
}
