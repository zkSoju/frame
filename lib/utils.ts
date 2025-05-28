import { clsx, type ClassValue } from "clsx";
import { format, toString } from "dnum";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenAddress(address: string) {
  return address.slice(0, 6) + "..." + address.slice(-4);
}

export const formatToken = (amount: bigint, decimals = 18, digits = 6) => {
  if (amount === 0n) return "0";

  // Check if the amount is very small (less than 0.000001)
  if (amount < BigInt(10) ** BigInt(decimals - digits)) {
    // Convert to scientific notation
    const formattedValue = toString([amount, decimals], {
      trailingZeros: false,
    });
    const scientificNotation = Number(formattedValue).toExponential(2);
    return scientificNotation;
  } else {
    return format([amount, decimals], {
      digits,
      trailingZeros: false,
    });
  }
};
