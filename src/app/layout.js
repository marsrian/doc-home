import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Toaster from "@/components/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doc Home",
  description: "Doc Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-[calc(100vh-100px)]">{children}</div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
