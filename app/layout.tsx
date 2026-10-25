
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "The Daily Read | Stories & Ideas",
  description:
    "Explore articles about technology, programming, writing, and everyday life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          © 2026 The Daily Read. Made for curious minds.
        </footer>
      </body>
    </html>
  );
}
