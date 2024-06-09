import { z } from "zod";

export const snapshotQuerySchema = z.object({
  address: z.string().optional(),
});
