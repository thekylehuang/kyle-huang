import { Geist, Geist_Mono } from 'next/font/google';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import './Footer.css';

const geist = Geist({
  subsets: ['latin'],
})

const geistmono = Geist_Mono({
  subsets: ['latin']
})

const Footer = () => {
  return (
    <footer className={`${geist.className} w-screen border-t border-zinc-700 pt-14 flex flex-col`}>
      <Marquee
      autoFill={true}
      className={`${geistmono.className} py-4 border-y border-neutral-900 dark:border-zinc-500`}>
        <span className='text-5xl sm:text-7xl mx-2 sm:mx-4 text-neutral-900 dark:text-zinc-50'>Kyle Huang</span>
        <span className='text-5xl sm:text-7xl mx-2 sm:mx-4 text-neutral-900 dark:text-zinc-50'>-</span>
      </Marquee>
      <div className='w-full mt-8 flex justify-center mb-4'>
        <div className='w-full max-w-3xl grid grid-rows-[1fr_1px_1fr] sm:grid-cols-[1fr_1px_1fr] sm:grid-rows-none'>
          <div className='grid grid-cols-2 gap-1 p-4 justify-items-center'>
            <Link href='/blog' className={`${geistmono.className} text-xl hover:underline text-left`}>Blog</Link>
            <Link href='/cv' className={`${geistmono.className} text-xl hover:underline`}>CV</Link>
            <Link href='/resources' className={`${geistmono.className} text-xl hover:underline`}>Resources</Link>
            <Link href='/contact' className={`${geistmono.className} text-xl hover:underline`}>Contact</Link>
          </div>
          <div className='h-full w-px bg-neutral-900 dark:bg-zinc-50 mask-image-y hidden sm:inline'></div>
          <div className='w-full h-px bg-neutral-900 dark:bg-zinc-50 mask-image-x inline sm:hidden'></div>
          <div className='grid grid-cols-2 gap-1 p-4 justify-items-center'>
            <Link href='https://www.youtube.com/@the-kyle-huang' className={`${geistmono.className} text-xl hover:underline`}>Youtube</Link>
            <Link href='https://www.instagram.com/thekylehuang/' className={`${geistmono.className} text-xl hover:underline`}>Instagram</Link>
            <Link href='https://github.com/thekylehuang' className={`${geistmono.className} text-xl hover:underline`}>Github</Link>
            <Link href='#' className={`${geistmono.className} text-xl hover:underline`}>LinkedIn</Link>
          </div>
        </div>
      </div>
      <div className={`max-w-3xl mx-auto w-full py-4 flex justify-center border-t border-zinc-700`}>
        <p>© {(new Date().getFullYear())} Kyle Huang. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;