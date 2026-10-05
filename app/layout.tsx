import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable:"--font-geist-sans", subsets:["latin"] });
const geistMono = Geist_Mono({ variable:"--font-geist-mono", subsets:["latin"] });

export const metadata: Metadata = {
  title: "Simar Virk · Gursimar Virk · Robotics & Mechanical Engineering",
  description: "Simar Virk (Gursimar Virk) — UC Berkeley mechanical engineer and robotics builder working across hardware integration, manufacturing, humanoids, manipulation, and real-world robot systems.",
  keywords: ["Simar Virk","Gursimar Virk","simarvirk.com","robotics engineer","mechanical engineer","robotics hardware","UC Berkeley","humanoid robotics","mechanical design","robotics integration"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  metadataBase: new URL("https://simarvirk.com"),
  openGraph: {
    title: "Simar Virk · Gursimar Virk · Robotics & Mechanical Engineering",
    description: "Robotics, mechanical design, manufacturing, integration, and the machines in between.",
    url: "https://simarvirk.com",
    siteName: "Simar Virk",
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gursimar Virk",
  alternateName: "Simar Virk",
  url: "https://simarvirk.com",
  sameAs: [
    "https://www.linkedin.com/in/gursimarvirk",
    "https://github.com/GursimarVirk",
  ],
  jobTitle: "Robotics Hardware Integration Engineer",
  alumniOf: "University of California, Berkeley",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(personSchema)}} />{children}</body></html>;
}
