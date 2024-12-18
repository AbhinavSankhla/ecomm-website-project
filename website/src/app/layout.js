import localFont from "next/font/local";
import "./globals.css";
import { CartContext } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Use the metadata API for title, description, and favicon
export const metadata = {
  title: "BeClothing - Online Fashion Store",
  description: "Fashion Ecommerce Website",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WishlistProvider>
          <CartContext>
            {children}
          </CartContext>
        </WishlistProvider>  
      </body>
    </html>
  );
}
