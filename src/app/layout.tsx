import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from "../lib/providers/next-theme-provider";
import "./globals.css";
// import "./style.css"
import db from "../lib/supabase/db";
db

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ['latin'] });

// console.log(`${geistSans.variable} ${geistMono.variable} antialiased`)

export const metadata: Metadata = {
  title: "Cypress | The Ultimate Collaboration Powerhouse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider attribute ='class' defaultTheme="dark" enableSystem>
        {children} </ThemeProvider>
      </body>
    </html>
  );
}
