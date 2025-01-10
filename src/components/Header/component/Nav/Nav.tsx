"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { Link } from "@/i18n/routing";
import { navLinks } from "@/components/Header/component/Nav/navLinks";

interface NavProps {
  text: string[];
  link: string[];
  className: string;
  isHeader?: boolean;
  onClick?: () => void;
}

const Nav: React.FC<NavProps> = ({
  text = [],
  link = [],
  className,
  isHeader,
  onClick,
}) => {
  const t = useTranslations("Header");
  const pathname = usePathname();

  if (!text.length || !link.length) {
    console.warn("Nav component received empty text or link arrays.");
    return null;
  }

  return (
    <nav className={twMerge("flex group", className)}>
      {text.map((el, index) => {
        const isActive = pathname.endsWith(link[index]);

        const activeClass =
          isActive && isHeader
            ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-link after:absolute after:bottom-0 after:left-0"
            : "";
        return (
          <Link
            key={index}
            href={link[index]}
            className={twMerge(activeClass, className)}
            onClick={(e) => {
              if (navLinks[index].onClick) {
                e.preventDefault();
                navLinks[index].onClick();
              }
              if (onClick !== undefined && onClick !== null) {
                onClick();
              }
            }}
          >
            {t(el)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
