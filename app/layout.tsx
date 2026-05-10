import { JetBrains_Mono, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import { defaultMetadata, jsonLd } from "@/shared/config/seo";

import Header from "@/shared/ui/Header";
import NextThemesProvider from "@/shared/providers/ThemeProvider";
import Footer from "@/shared/ui/Footer";

import Grid from "@/shared/ui/Column";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetBrainsMono.variable} ${inter.variable} h-full antialiased`}
    >
      {/*For SEO purposes */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="min-h-full flex flex-col transition-colors duration-300 bg-surface text-on-surface-variant/80 overflow-x-hidden">
        <NextThemesProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
          />

          <Grid as={'main'} className="flex-1 grid-rows-[auto_1fr_auto]">
            <Header />
            {children}
            <Footer />
          </Grid>
        </NextThemesProvider>
      </body>
    </html>
  );
}
