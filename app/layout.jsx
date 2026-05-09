import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Md. Junaidul Islam Jarif",
  description:
    "Md. Junaidul Islam Jarif — Backend Developer building responsive web experiences and scalable backend systems with React, Node.js, and TypeScript.",
  icons: { icon: "/favicon/circle.png" },
};

export const viewport = {
  themeColor: "#7c3aed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <head />
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
