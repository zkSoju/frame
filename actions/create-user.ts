"use server";

import { action } from "@/actions/safe-action";
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
});

export const createUserAction = action(createUserSchema, async ({ name }) => {
  return 0;
});
