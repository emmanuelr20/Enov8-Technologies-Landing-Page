import "./globals.css";
import Navbar from "./layouts/Navbar.jsx";
import { Space_Grotesk } from "next/font/google";
import { Mulish } from "next/font/google";

const space = Space_Grotesk({
    variable: "--font-space",
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap'
});

const mulish = Mulish({
  variable: "--font-mulish",
  weight: ['400', '500'],
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Enov8 Technologies",
  description: "Building custom solutions that drive business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${space.variable} text-zinc-900 bg-bg-light dark:bg-black overflow-x-hidden
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
