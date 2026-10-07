import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tadiwa-makoni.vercel.app"),
  title: {
    default: "T.Makoni — Software Developer",
    template: "%s | T.Makoni",
  },
  description:
    "Personal portfolio of Tadiwa Makoni, Software Developer & Full-Stack Engineer specializing in modern web applications, mobile experiences, APIs, and scalable systems.",
  keywords: [
    "Tadiwa Makoni",
    "T.Makoni",
    "Software Developer",
    "Full-Stack Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Django",
    "Python",
    "React Native",
    "Harare Zimbabwe Developer",
  ],
  authors: [{ name: "Tadiwa Makoni", url: "https://tadiwa-makoni.vercel.app" }],
  creator: "Tadiwa Makoni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tadiwa-makoni.vercel.app",
    title: "T.Makoni — Software Developer",
    description:
      "Building modern digital experiences with thoughtful engineering. Full-stack development, mobile apps, and robust systems.",
    siteName: "T.Makoni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "T.Makoni — Software Developer",
    description:
      "Building modern digital experiences with thoughtful engineering. Full-stack development, mobile apps, and robust systems.",
    creator: "@TadiwaMakoni",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tadiwa Makoni",
    alternateName: "T.Makoni",
    url: "https://tadiwa-makoni.vercel.app",
    jobTitle: "Software Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    sameAs: [
      "https://github.com/TadiwaMakoni05",
      "https://www.linkedin.com/in/tadiwa-makoni-95006a2a4/",
    ],
    knowsAbout: [
      "Software Development",
      "Full-Stack Web Development",
      "React",
      "Next.js",
      "Django",
      "Python",
      "TypeScript",
      "React Native",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
