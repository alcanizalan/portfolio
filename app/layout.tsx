import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Alan Alcañiz | Portfolio',
  description: 'Portfolio web de desarrollo frontend',
  icons: {
    icon: '/favicon.ico', // Tu favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
