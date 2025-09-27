import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InstaPrep",
  description: "An AI-Powered Interview platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className= "dark">
      <body className={`${monaSans.className}  antialiased pattern`}>
        <AuthProvider>
          <Navbar />
          <div className="pt-20">{/* Add padding for fixed navbar */}
            {children}
          </div>
          <Toaster/>
        </AuthProvider>
      </body>
    </html>
  );
}
