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

export const metadata: Metadata = {
  title: "【新学期スタートダッシュキャンペーン】フリ校Udemy講座 - 全講座1,300円！AIスキルを身につけよう",
  description: "新学期スタートダッシュキャンペーン！フリ校Udemy講座が期間限定で全て1,300円。ChatGPT活用講座からAIプログラミング、Discord Bot開発まで学べる",
  metadataBase: new URL('https://furikousale3.vercel.app'),
  openGraph: {
    title: "【新学期スタートダッシュキャンペーン】フリ校Udemy講座 - 全講座1,300円！",
    description: "新学期スタートダッシュキャンペーン開催中！ChatGPT活用講座からDiscord Bot開発まで全て1,300円で学べる特別セール",
    url: "https://furikousale3.vercel.app",
    siteName: "フリーランスの学校",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "フリ校Udemy講座 新学期スタートダッシュキャンペーン",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "【新学期スタートダッシュキャンペーン】フリ校Udemy講座 - 全講座1,300円！",
    description: "新学期スタートダッシュキャンペーン開催中！ChatGPT活用講座からDiscord Bot開発まで全て1,300円で学べる特別セール",
    images: ["/og-image.png"],
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
