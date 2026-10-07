import { Metadata } from "next";
import { Inter, Geist_Mono } from 'next/font/google';
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

const geistMono = Geist_Mono({
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
      <body className={`${inter.className} ${geistMono.className}`}>{children}</body>
    </html>
  );
}
