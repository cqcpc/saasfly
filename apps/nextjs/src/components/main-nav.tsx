"use client";

import React from "react";
import Link from "next/link";

import * as Icons from "@saasfly/ui/icons";
import { DocumentGuide } from "~/components/document-guide";
import { MobileNav } from "~/components/mobile-nav";

import type { MainNavItem } from "~/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  params: {
    lang: string;
  };
  marketing?: Record<string, string | object>;
}

export function MainNav({ items, children, params: { lang }, marketing }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleMenuItemClick = () => {
    toggleMenu();
  };
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex items-center">
        <Link href={`/${lang}`} className="hidden items-center space-x-2 md:flex">
          <img src="/imageprompt-logo.svg" alt="ImagePrompt.org Logo" className="h-8 w-8 mr-2" />
          <div className="text-2xl font-bold" style={{color: '#7f00ff'}}>ImagePrompt</div>
        </Link>
      </div>

      <div className="flex items-center md:hidden">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <img src="/imageprompt-logo.svg" alt="ImagePrompt.org Logo" className="h-6 w-6 mr-2" />
          <div className="text-xl font-bold" style={{color: '#7f00ff'}}>ImagePrompt</div>
        </Link>
        <button
          className="ml-4 flex items-center space-x-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.Close/> : <Icons.Logo/>}
          <span className="font-bold">Menu</span>
        </button>
      </div>
      {showMobileMenu && items && (
        <MobileNav items={items} menuItemClick={handleMenuItemClick}>
          {children}
        </MobileNav>
      )}
    </div>
  );
}
