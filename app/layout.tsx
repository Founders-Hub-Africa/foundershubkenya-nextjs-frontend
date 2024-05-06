import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoundersHub Kenya",
  description: "A platform for connecting founders and investors in Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
