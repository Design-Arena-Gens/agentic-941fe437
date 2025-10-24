import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Script Assistant - YouTube Script Generator",
  description: "AI-powered scripting assistant for creating engaging YouTube video scripts with hooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
