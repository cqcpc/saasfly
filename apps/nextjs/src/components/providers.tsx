"use client";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import ErrorBoundary from "./error-boundary";

export function Providers({ children, session }: { children: React.ReactNode; session: Session | null }) {
  return (
    <SessionProvider session={session}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </SessionProvider>
  );
}