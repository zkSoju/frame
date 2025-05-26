"use server";

import { action } from "@/actions/safe-action";
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
});

export const createUserAction = action
  .schema(createUserSchema)
  .metadata({
    name: "create-user",
  })
  .action(async ({ parsedInput: { name } }) => {
    return 0;
  });
