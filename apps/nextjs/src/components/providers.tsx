"use client";

import { SessionProvider } from "next-auth/react";
import ErrorBoundary from "./error-boundary";

export function Providers({ children, session }: { children: React.ReactNode; session: any }) {
  return (
    <SessionProvider session={session}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </SessionProvider>
  );
}