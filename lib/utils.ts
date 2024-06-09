import { type ClassValue, clsx } from "clsx";
import { format } from "dnum";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatToken = (amount: bigint, decimals = 18) => {
  return format([amount, decimals], {
    digits: 2,
    trailingZeros: true,
  });
};
