import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const alZaina = localFont({
  src: [
    {
      path: "../Alzaina.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-al-zaina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Before Forbes",
  description: "Faith, business, and legacy storytelling for the next generation of leaders.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${alZaina.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full bg-[#f7f1e5] text-[#431F0F]`}>
        {children}
      </body>
    </html>
  );
}
