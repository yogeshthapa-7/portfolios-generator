import type { Metadata } from "next";
import { PortfolioProvider } from "./context/PortfolioContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Generator - Create Your Professional Portfolio",
  description: "Build a stunning professional portfolio with ease. Choose from multiple themes and customize every aspect of your digital presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&family=Orbitron:wght@400;700;900&family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </body>
    </html>
  );
}