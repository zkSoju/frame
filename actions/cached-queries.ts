"use server";

import { getUserQuery } from "@/actions/queries";
import { unstable_cache } from "next/cache";

export async function getUser() {
  return unstable_cache(
    async () => {
      return getUserQuery();
    },
    ["user"],
    {
      tags: ["user"],
      revalidate: 180,
    }
  )();
}
