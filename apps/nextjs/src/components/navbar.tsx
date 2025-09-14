"use client";

import React from "react";
import Link from "next/link";
import type { User } from "@saasfly/auth";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@saasfly/ui";
import { Button } from "@saasfly/ui/button";

import { MainNav } from "./main-nav";
import { LocaleChange } from "~/components/locale-change";

import { useSigninModal } from "~/hooks/use-signin-modal";
import { UserAccountNav } from "./user-account-nav";

import useScroll from "~/hooks/use-scroll";
import type { MainNavItem } from "~/types";

interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: {
    lang: string;
  };
  marketing: Record<string, string | object>;
  dropdown: Record<string, string>;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
  dropdown,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();
  const segment = useSelectedLayoutSegment();

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-b border-gray-200 bg-white backdrop-blur-xl transition-all shadow-sm ${
        scroll ? (scrolled ? "border-b" : "bg-white") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-center py-4">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <MainNav items={items} params={{ lang: `${lang}` }} marketing={marketing}>
            {children}
          </MainNav>

          <div className="flex items-center justify-center flex-1">
            {items?.length ? (
              <nav className="hidden gap-6 md:flex">
                {items?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.disabled ? "#" : (item.href.startsWith("http") ? item.href : `/${lang}${item.href}`)}
                    className={cn(
                      "flex items-center text-base font-medium transition-colors text-black hover:text-black group",
                      item.href.startsWith(`/${segment}`)
                        ? "font-semibold"
                        : "",
                      item.disabled && "cursor-not-allowed opacity-80",
                    )}
                    style={{
                       fontSize: '16px',
                       color: item.href.startsWith(`/${segment}`) ? '#7f00ff' : '#000000'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.color = '#7f00ff';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.color = item.href.startsWith(`/${segment}`) ? '#7f00ff' : '#000000';
                     }}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-[1px] h-8 bg-accent"></div>

            {rightElements}

            <LocaleChange url={"/"} />
            {!user ? (
              <Link href={`/${lang}/login`}>
                <Button variant="outline" size="sm" style={{backgroundColor: '#7f00ff'}}>
                  {typeof marketing.login === "string"
                    ? marketing.login
                    : "Default Login Text"}
                </Button>
              </Link>
            ) : null}

            {user ? (
              <UserAccountNav
                user={user}
                params={{ lang: `${lang}` }}
                dict={dropdown}
              />
            ) : (
              <Button
                className="px-3"
                variant="default"
                size="sm"
                onClick={signInModal.onOpen}
              >
                {typeof marketing.signup === "string"
                  ? marketing.signup
                  : "Default Signup Text"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
