import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Produk - Toko Barokah Balikpapan",
    template: `%s - ${siteConfig.name}`,
  },
  description: "Daftar produk di Toko Barokah Balikpapan",
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  generator: siteConfig.generator,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10">{children}</section>;
}
