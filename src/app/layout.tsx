import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD offers grounded, evidence-based therapy (CBT, EMDR, Somatic) for anxiety, trauma, and professional burnout in Santa Monica, CA and via statewide California telehealth.",
  keywords: [
    "Dr. Maya Reynolds",
    "Psychologist Santa Monica",
    "Anxiety Therapy Santa Monica",
    "EMDR Therapist Santa Monica",
    "Trauma Therapy Santa Monica",
    "Burnout Counseling California",
    "CBT Therapy Santa Monica",
    "Telehealth Psychologist California",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA",
    description:
      "Specialized clinical therapy for anxiety, panic, trauma recovery, and burnout for high achievers and professionals in Santa Monica & California.",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds, PsyD Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FAF7F3] text-[#1E293B]">
        {children}
      </body>
    </html>
  );
}
