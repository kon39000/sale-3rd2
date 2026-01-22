import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  title: "【冬の学び大セール】フリ校Udemy講座 - 全講座1,300円！AIスキルを身につけよう",
  description: "寒さに負けるな！冬の学び大セール。フリ校Udemy講座が期間限定で全て1,300円。ChatGPT活用講座からAIプログラミング、Chrome拡張開発まで学べる",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: "【冬の学び大セール】フリ校Udemy講座 - 全講座1,300円！",
    description: "寒さに負けるな！冬の学び大セール。ChatGPT活用講座からChrome拡張開発まで全て1,300円で学べる特別セール",
    url: "/",
    siteName: "フリーランスの学校",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "フリ校Udemy講座 冬の学び大セール",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "【冬の学び大セール】フリ校Udemy講座 - 全講座1,300円！",
    description: "寒さに負けるな！冬の学び大セール。ChatGPT活用講座からChrome拡張開発まで全て1,300円で学べる特別セール",
    images: ["/twitter-image"],
    site: "@furikoubot",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
