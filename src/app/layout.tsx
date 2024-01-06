import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Santiago Tovar | Full Stack Developer',
  description: 'Santiago Tovar | Mid Senior Full Stack Developer with React, Next, Node, Express, MongoDB, Strapi, Tailwind, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background"}>{children}</body>
      <nav className='fixed top-0 left-0 h-20 pl-10 w-full bg-background z-10 flex items-center gap-7 text-xl text-background-light'>
        <Link href="/">Home</Link> 
        <Link href="/#skills">Skill</Link>
        <Link href="/blog">Blog</Link>

      </nav>
      <Footer/>
      
    </html>
  )
}
