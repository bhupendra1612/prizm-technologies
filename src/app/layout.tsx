import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prizm Technologies | Web & Mobile App Development Agency",
  description: "Transform your digital presence with Prizm Technologies. We specialize in website development, mobile app development for Android & iOS, and WordPress to custom code migration.",
  keywords: "web development, mobile app development, WordPress migration, digital agency, Next.js, React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
