import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable:"--font-geist-sans", subsets:["latin"] });
const geistMono = Geist_Mono({ variable:"--font-geist-mono", subsets:["latin"] });

export const metadata: Metadata = {
  title: "Gursimar Virk · Robotics & Mechanical Engineering",
  description: "Gursimar Virk — mechanical engineer and robotics builder working across hardware integration, manufacturing, humanoids, manipulation, and real-world robot systems.",
  metadataBase: new URL("https://simarvirk.com"),
  openGraph: {
    title: "Gursimar Virk · Robotics & Mechanical Engineering",
    description: "Robotics, mechanical design, manufacturing, integration, and the machines in between.",
    url: "https://simarvirk.com",
    siteName: "Gursimar Virk",
    type: "website",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
