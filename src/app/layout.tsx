import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supermarket",
  description: "Your one-stop shop for fresh groceries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body   
      className={`${inter.variable} font-sans antialiased`}
      >
        <ProductProvider>
          <CartProvider>
            <Navbar/>
            {children}
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
