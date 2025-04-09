import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trilogi Nusa Putra Mengubah Hidupku",
  description: "Blog dokumentasi pribadi tentang bagaimana nilai-nilai Trilogi Nusa Putra mengubah hidup saya.",
  metadataBase: new URL("https://trilogy-npu-blog.vercel.app"),
  openGraph: {
    title: "Trilogi Nusa Putra Mengubah Hidupku",
    description: "Blog dokumentasi pribadi tentang bagaimana nilai-nilai Trilogi Nusa Putra mengubah hidup saya.",
    url: "https://trilogy-npu-blog.vercel.app",
    siteName: "Trilogi Nusa Putra Blog",
    images: [
      {
        url: "/images/Haikal-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "M. Z. Haikal Hamdani",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trilogi Nusa Putra Mengubah Hidupku",
    description: "Blog dokumentasi pribadi tentang bagaimana nilai-nilai Trilogi Nusa Putra mengubah hidup saya.",
    images: ["/images/Haikal-thumbnail.jpg"],
  },
  icons: {
    icon: [{ url: "/images/favicon.png" }],
    apple: [{ url: "/images/favicon.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
