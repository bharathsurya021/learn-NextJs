import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bharath | Developer & UI Designer',
  description: 'Bharath is full stack developer with overall 2yrs of experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`bg-gray-50 relative text-gray-950 ${inter.className}`}>
        <div className='sm:w-[68.75rem] -z-10 bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]'></div>
        <div className='bg-[#dbd7fb] -z-10 absolute md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]'></div>
        <Header/>
        {children}
        </body>
    </html>
  )
}
