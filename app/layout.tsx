import { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Alan Alcañiz | Portfolio',
  description: 'Portfolio web de desarrollo frontend',
  icons: {
    icon: '/favicon.ico', // Tu favicon
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
