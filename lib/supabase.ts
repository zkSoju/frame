import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =
  typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    : process.env.SUPABASE_SERVICE_ROLE_KEY!;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
  