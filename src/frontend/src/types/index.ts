export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  priceINR: number;
  priceUSD: number;
  description: string;
  tag: string;
  category: "apparel" | "ittar" | "accessories";
}

export interface EmailSignup {
  email: string;
  timestamp: number;
  source: string;
}

export type CurrencyMode = "INR" | "USD";

export type EmailStatus = "idle" | "loading" | "success" | "error";
