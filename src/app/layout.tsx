import type { Metadata } from "next";
import styles from "./layout.module.css"
import type { Viewport } from 'next'
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
export const metadata: Metadata = {
  title: "MedCare",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="html">
      <body className={styles.body} id="body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
