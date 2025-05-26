import jwt, { JwtPayload } from "jsonwebtoken";
import { JwksClient } from "jwks-rsa";

const DYNAMIC_ENV_ID = process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID;

if (!DYNAMIC_ENV_ID) {
  throw new Error("NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID is not defined");
}

const jwksClient = new JwksClient({
  jwksUri: `https://app.dynamic.xyz/api/v0/sdk/${DYNAMIC_ENV_ID}/.well-known/jwks`,
  rateLimit: true,
  cache: true,
  cacheMaxEntries: 5,
  cacheMaxAge: 600000, // 10 minutes
});

interface VerifiedWallet {
  address: string;
  chain: string;
}

export async function verifyToken(token: string): Promise<JwtPayload> {
  try {
    // Decode the token header to get the key ID
    const decodedHeader = jwt.decode(token, { complete: true });
    if (!decodedHeader || typeof decodedHeader === "string") {
      throw new Error("Invalid token format");
    }

    const kid = decodedHeader.header.kid;
    if (!kid) {
      throw new Error("No key ID (kid) found in token header");
    }

    // Get the specific signing key using the kid
    const signingKey = await jwksClient.getSigningKey(kid);
    const publicKey = signingKey.getPublicKey();

    const decodedToken = jwt.verify(token, publicKey, {
      ignoreExpiration: false,
    }) as JwtPayload;

    if (decodedToken.scopes?.includes("requiresAdditionalAuth")) {
      throw new Error("Additional verification required");
    }

    return decodedToken;
  } catch (error) {
    console.error("JWT verification failed:", error);
    throw new Error("Invalid or expired token");
  }
}

export async function getVerifiedWallets(
  token: string,
): Promise<VerifiedWallet[]> {
  const decodedToken = await verifyToken(token);

  // Dynamic JWT stores verified wallets in verified_credentials array
  const verifiedWallets = decodedToken.verified_credentials?.map(
    (cred: any) => {
      return {
        address:
          cred.chain === "eip155" ? cred.address.toLowerCase() : cred.address,
        chain: cred.chain,
      };
    },
  );

  if (!verifiedWallets?.length) {
    throw new Error("No verified wallets found in token");
  }

  return verifiedWallets;
}

// Keep the original function for backwards compatibility
export async function getWalletAddress(token: string): Promise<string> {
  const wallets = await getVerifiedWallets(token);
  return wallets[0].address;
}
