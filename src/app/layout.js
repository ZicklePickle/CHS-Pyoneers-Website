import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { RevealAnimation } from './components/revealAnimation/RevealAnimation'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CHS Pyoneers',
  description: 'Website for CHS Pyoneers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <section>
       
          <NavBar></NavBar>
       
        </section>
        
        <section className='page'>
          {children}
        </section>
        <Footer></Footer>
      </body>
    </html>
  )
}
