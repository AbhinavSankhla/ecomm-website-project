import localFont from "next/font/local";
import "./globals.css";
import { CartContext} from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Head from "next/head";


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

export const metadata = {
  title: "BeClothing - Online Fashion Store",
  description: "Fashion Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Set favicon globally for all pages */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <CartProvider> */}
          <WishlistProvider>
            <CartContext>
              {children}
            </CartContext>
          </WishlistProvider>  
        {/* </CartProvider> */}
      </body>
    </html>
  );
}
