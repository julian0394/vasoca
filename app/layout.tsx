import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./providers"
import Nav from './components/NewNav/Nav'
import Footer from './components/Footer/Footer'
import { twMerge } from 'tailwind-merge'
import ProductModal from './components/ProductModal/ProductModal'
import InfoModal from './components/InfoModal/InfoModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vasoca Vape',
  description: 'Fabricación de líquidos de vapeo con esencias importadas',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="es" className='dark'>
      <body className={twMerge(inter.className)}>
        <Providers>
          <div className='max-h-screen flex flex-col'>
            <Nav />
            {children}
            <Footer />
          </div>
          
          {/* <CartModal /> */}
          <ProductModal />
          <InfoModal />
        </Providers>
      </body>
    </html>
  )
}
