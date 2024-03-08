import React from 'react'
import type { Metadata } from "next";
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: "About Page",
  description: "Practice About",
  icons: './next.svg'
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>
        <div className={styles.navBar}>About Navbar</div>
        {children}
</>

  );
}
