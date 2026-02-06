import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isolate AI Widget - Multi-Tenant ERP SaaS",
  description: "Production-ready AI agent widget with voice support and ERP capabilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#111827] text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
