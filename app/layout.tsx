import { JetBrains_Mono, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import Header from "@/shared/ui/Header";
import NextThemesProvider from "@/shared/providers/ThemeProvider";
import Footer from "@/shared/ui/Footer";

import Grid from "@/shared/ui/Column";
import { Metadata } from "next";
import AnimationWrapper from "@/shared/animation/AnimationWrapper";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Ebram Barsoum | Next.js & React.js Developer",
    template: "%s | Ebram Barsoum",
  },
  description: "Frontend engineer specializing in Next.js, React.js, TypeScript, performance optimization, and scalable web architecture.",
  keywords: [
    "Ebram Barsoum",
    "Next.js developer",
    "React.js developer",
    "Front end developer",
    "App router",
    "Mid-lvel developer",
    "TypeScript developer",
    "Javascript developer",
    "Front End developer Egypt",
    "Front End developer United Arab Emirates",
    "Front End developer Saudi Arabia",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

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
