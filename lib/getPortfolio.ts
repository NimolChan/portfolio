import { portfolioData } from "./portfolio";
import type { Portfolio } from "./types";

export async function getPortfolio(): Promise<Portfolio> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:3001";

  try {
    const response = await fetch(`${apiUrl}/portfolio`, { cache: "no-store" });

    if (!response.ok) {
      return portfolioData;
    }

    return response.json();
  } catch {
    return portfolioData;
  }
}
