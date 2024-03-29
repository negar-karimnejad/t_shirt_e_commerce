import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/context/AuthProvider";
import ToastContext from "@/context/HotToastContext";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import GetCurrentUser from "./(auth)/actions/getCurrentUser";
import "./globals.css";
import CartContex from "@/context/CartContext";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dev-Threads",
  description: "E-commerce Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await GetCurrentUser();

  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthProvider>
          <CartContex>
            <ToastContext />
            <Navbar user={user!} />
            {children}
          </CartContex>
        </AuthProvider>
      </body>
    </html>
  );
}
