import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { RevealAnimation } from './components/revealAnimation/RevealAnimation'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CHS Pyoneers',
  description: "Centennial's Premier CS Club",
  icons: {
    icon: 'logo.png'
  },
  openGraph: {
    images: 'https://chspyoneers.com/preview-card.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
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
