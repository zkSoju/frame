import { verifyToken } from "@/lib/verify-jwt";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { createSafeActionClient } from "next-safe-action";
import { headers } from "next/headers";
import { z } from "zod";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const ratelimit = new Ratelimit({
  limiter: Ratelimit.fixedWindow(10, "10s"),
  redis: redis,
});

export const action = createSafeActionClient({
  // Can also be an async function.
  handleReturnedServerError(e) {
    // In this case, we can use the 'MyCustomError` class to unmask errors
    // and return them with their actual messages to the client.
    if (e instanceof Error) {
      return e.message;
    }

    // Every other error that occurs will be masked with the default message.
    return "Something went wrong. Please try again.";
  },
  defineMetadataSchema() {
    return z.object({
      name: z.string(),
      track: z
        .object({
          event: z.string(),
          channel: z.string(),
        })
        .optional(),
    });
  },
})
  .use(async ({ next, clientInput, metadata }) => {
    const result = await next({ ctx: {} });

    if (process.env.NODE_ENV === "development") {
      console.log("Input ->", clientInput);
      console.log("Result ->", result.data);
      console.log("Metadata ->", metadata);

      return result;
    }

    return result;
  })
  .use(async ({ next, metadata }) => {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for");

    const { success, remaining } = await ratelimit.limit(
      `${ip}-${metadata?.name}`,
    );

    if (!success) {
      throw new Error("Too many requests");
    }

    return next({
      ctx: {
        ratelimit: {
          remaining,
        },
      },
    });
  })
  .use(async ({ next }) => {
    const headersList = await headers();
    const token = headersList.get("authorization");

    // If neither token nor API key is provided
    if (!token) {
      throw new Error("Authentication required");
    }

    try {
      // Handle internal authentication (JWT token)

      const decodedToken = await verifyToken(token);
      return next({
        ctx: {
          type: "internal",
          user: decodedToken,
        },
      });
    } catch (error) {
      throw new Error("Authentication failed");
    }
  });
