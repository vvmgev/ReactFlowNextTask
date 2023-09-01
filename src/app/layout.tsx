import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header/header'

export const metadata: Metadata = {
  title: 'ReactFlow Next.js',
  description: 'Application for creating Todo list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
