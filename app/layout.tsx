import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Zynex Solutions | Pakistan's Premier Tech Education & Solutions",
  description: "Learn Cybersecurity, Web Development, and Data Analysis from industry experts at Zynex Solutions. We bridge the gap between raw talent and industry-ready professionals.",
  keywords: ["Cybersecurity Pakistan", "Web Development Course", "Data Analyst Training", "Zynex Solutions", "Tech Education"],
  authors: [{ name: "Zynex Solutions" }],
  openGraph: {
    title: "Zynex Solutions | Build Your Digital Future",
    description: "Pakistan's premier tech education & solutions company. Expert-led courses in Cybersecurity, Web Dev, and Data Analytics.",
    type: "website",
    locale: "en_PK",
    siteName: "Zynex Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${dmSans.variable} font-sans antialiased bg-[#050f0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
