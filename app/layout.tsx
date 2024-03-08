import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practice Home",
  description: "Practice Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navBar}>
          <div>Next Practice</div>
          <div className={styles.rightBox}>
            <a href="#">Home</a>
            <a href="#">Login</a>
            <a href="#">Get Started</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
