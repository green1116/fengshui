import type { Metadata } from 'next'
import { Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const notoSans = Noto_Sans_SC({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans'
})

const notoSerif = Noto_Serif_SC({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: '风水咨询 - 专业风水服务与产品',
  description: '专业的风水咨询服务，提供住宅与商业风水布局、AI智能咨询、风水产品销售',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
