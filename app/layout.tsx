import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Sidebar from "./components/sidebar/sidebar";
import Nav from "./components/Navlinks/Nav";
import MathWrapper from "./components/wrapper/MathWrapper"; // Import MathWrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Math Academy",
  description: "Improve your math skills with our well-structured lessons, detailed examples, and practice exercises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <Nav />
        <div className="flex sm:gap-10 min-h-screen">
          <Sidebar />
          {/* Wrap only the content that needs MathJax in MathWrapper */}
          <MathWrapper> 
            <main className="flex-1 p-6">{children}</main>
          </MathWrapper>
        </div>
        <Footer />
      </body>
    </html>
  );
}
