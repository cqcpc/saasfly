import { match as matchLocale } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";
import Negotiator from "negotiator";

import { i18n } from "~/config/i18n-config";
import { env } from "@saasfly/auth/env.mjs";

const noNeedProcessRoute = [".*\\.png", ".*\\.jpg", ".*\\.svg", ".*\\.ico", ".*\\.webp", ".*\\.opengraph-image.png", "/_next/.*", "/__next_devtools__/.*", "/favicon.ico", "^/api/.*", "^/trpc/.*"];

const noRedirectRoute = ["^/api/.*", "^/trpc/.*", "^/admin.*"];

const publicRoutes = [
  new RegExp("/(\\w{2}/)?signin(.*)"),
  new RegExp("/(\\w{2}/)?login(.*)"),
  new RegExp("/(\\w{2}/)?register(.*)"),
  new RegExp("/(\\w{2}/)?imageprompt(.*)"),
  new RegExp("/(\\w{2}/)?terms(.*)"),
  new RegExp("/(\\w{2}/)?privacy(.*)"),
  new RegExp("/(\\w{2}/)?docs(.*)"),
  new RegExp("/(\\w{2}/)?blog(.*)"),
  new RegExp("/(\\w{2}/)?pricing(.*)"),
  new RegExp("^/\\w{2}$"), // root with locale
  new RegExp("^/$"), // root path
];

export function isPublicRoute(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return publicRoutes.some((route) => route.test(pathname));
}

export function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const locales = Array.from(i18n.locales);
  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function isNoRedirect(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return noRedirectRoute.some((route) => new RegExp(route).test(pathname));
}

export function isNoNeedProcess(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname;
  return noNeedProcessRoute.some((route) => new RegExp(route).test(pathname));
}

export async function middleware(req: NextRequest) {
  if (isNoNeedProcess(req)) {
    return NextResponse.next();
  }

  const isWebhooksRoute = req.nextUrl.pathname.startsWith("/api/webhooks/");
  if (isWebhooksRoute) {
    return NextResponse.next();
  }
  
  const pathname = req.nextUrl.pathname;
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  // Redirect if there is no locale
  if (!isNoRedirect(req) && pathnameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        req.url,
      ),
    );
  }

  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuth = !!token;
  let isAdmin = false;
  
  if (env.ADMIN_EMAIL && token?.email) {
    const adminEmails = env.ADMIN_EMAIL.split(",");
    isAdmin = adminEmails.includes(token.email);
  }

  const isAuthPage = /^\/[a-zA-Z]{2,}\/(login|register|login-clerk)/.test(
    req.nextUrl.pathname,
  );
  const isAuthRoute = req.nextUrl.pathname.startsWith("/api/trpc/");
  const locale = getLocale(req);
  
  if (isAuthRoute && isAuth) {
    return NextResponse.next();
  }
  
  if (req.nextUrl.pathname.startsWith("/admin/dashboard")) {
    if (!isAuth || !isAdmin)
      return NextResponse.redirect(new URL(`/admin/login`, req.url));
    return NextResponse.next();
  }
  
  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url));
    }
    return NextResponse.next();
  }
  
  if (!isAuth) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }
    return NextResponse.redirect(
      new URL(`/${locale}/imageprompt?from=${encodeURIComponent(from)}`, req.url),
    );
  }
  
  return NextResponse.next();
}
