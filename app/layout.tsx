import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/app/componentsbar/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Use the Metadata API for page-level metadata
export const metadata: Metadata = {
  title: "Pisit Jinanikorn - Personal Website",
  description: "Personal portfolio of Pisit Jinanikorn",
  icons: {
    icon: [
      { rel: "icon", type: "image/x-icon", url: "/image/favicon_io/favicon.ico" },
      { rel: "icon", type: "image/png", url: "/image/favicon_io/favicon.png" },
    ],
    apple: "/image/favicon_io/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pisit Jinanikorn - Personal Website",
    description: "Personal portfolio of Pisit Jinanikorn",
    images: [
      {
        url: "/image/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
