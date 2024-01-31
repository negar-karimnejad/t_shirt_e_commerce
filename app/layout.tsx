import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/context/AuthProvider";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dev-Threads",
  description: "E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
