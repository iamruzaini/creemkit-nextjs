import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Geist, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://creemkit-nextjs-supabase.vercel.app",
  ),
  title: "CreemKit — Production-Ready Next.js SaaS Boilerplate with Creem Payments",
  description:
    "Launch your SaaS faster with CreemKit. Complete Next.js boilerplate featuring Creem payments, Supabase auth, subscriptions, license keys, credits system, webhooks, and demo mode. Production-ready in hours.",
  keywords: [
    "SaaS boilerplate",
    "Next.js",
    "Supabase",
    "Creem",
    "payments",
    "subscriptions",
    "TypeScript",
    "license keys",
    "credits system",
    "SaaS starter",
  ],
  openGraph: {
    title: "CreemKit — Production-Ready Next.js SaaS Boilerplate",
    description:
      "Complete SaaS starter with Creem payments, Supabase auth, subscriptions, license keys, and credits system. Ship your SaaS in hours, not weeks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreemKit — Ship Your SaaS in Hours",
    description: "Production-ready Next.js boilerplate with Creem payments, Supabase auth, subscriptions, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(bricolage.variable, geist.variable, jetbrainsMono.variable)}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
