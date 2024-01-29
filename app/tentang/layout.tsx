import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Tentang - Toko Barokah Balikpapan",
    template: `%s - ${siteConfig.name}`,
  },
  description: "Tentang Toko Barokah Balikpapan",
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
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">{children}</div>
    </section>
  );
}
