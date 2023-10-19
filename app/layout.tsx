import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import { APP_NAME, defaultDesc } from "@/components/AppHead";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: defaultDesc,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-44">
          <MainNav />
        </div>
        <div className="ml-44">{children}</div>
      </body>
    </html>
  );
}
