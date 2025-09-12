import type { NextRequest } from "next/server";
import {initTRPC, TRPCError} from "@trpc/server";
import { getServerSession } from "next-auth";
import { ZodError } from "zod";

import { transformer } from "./transformer";
import { authOptions } from "@saasfly/auth";

interface CreateContextOptions {
  req?: NextRequest;
  session?: any;
}
export const createTRPCContext = async (opts: {
  headers: Headers;
}) => {
  const session = await getServerSession(authOptions);
  return {
    userId: session?.user?.id,
    session,
    ...opts,
  };
};

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;

export const t = initTRPC.context<TRPCContext>().create({
  transformer,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;
export const procedure = t.procedure;
export const mergeRouters = t.mergeRouters;

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      session: ctx.session,
      userId: ctx.session.user.id
    }
  });
});


export const protectedProcedure = procedure.use(isAuthed);