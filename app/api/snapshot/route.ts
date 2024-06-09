import { snapshotQuerySchema } from "@/lib/zod/snapshot";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { address } = snapshotQuerySchema.parse({
    address: req.nextUrl.searchParams.get("address"),
  });
}
