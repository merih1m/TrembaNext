"use client";
import { useMemo } from "react";

import BladeLine from "./component/BladeLine/BladeLine";
import LanguageSwitcher from "./component/Language/LanguageSwitcher";
import Logo from "./component/Logo/Logo";
import Nav from "./component/Nav/Nav";
import { navLinks } from "./component/Nav/navLinks";
import Profile from "./component/Profile/Profile";
import Burger from "@/components/Burger/Burger";
import { usePathname } from "@/i18n/routing";

export default function HeaderComponent() {
  const headerLinks = useMemo(() => navLinks.slice(0, 4), [navLinks]);

  return (
    <div className="w-full ">
      <header className="flex flex-row justify-between items-center bg-headerBg px-4 h-16 shadow-md relative">
        <Logo />

        <Burger />

        <div className="hidden md:flex flex-row items-center gap-x-5">
          <Nav
            text={headerLinks.map((text) => text.text)}
            link={headerLinks.map((link) => link.link)}
            className="flex justify-center items-center gap-x-5 relative"
            isHeader={true}
          />
          <LanguageSwitcher />
          <Profile />
        </div>
      </header>

      <div className="w-full">
        <BladeLine />
      </div>
    </div>
  );
}
