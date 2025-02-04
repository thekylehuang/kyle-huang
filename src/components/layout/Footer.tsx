import { Geist } from 'next/font/google';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import './Footer.css';

const geist = Geist({
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className={`${geist.className} w-screen border-t border-zinc-700 pt-14 flex flex-col`}>
      <Marquee
      autoFill={true}
      className={`${geist.className} py-4 border-y border-neutral-950 dark:border-zinc-500`}>
        <span className='text-5xl sm:text-7xl mx-2 sm:mx-4 text-neutral-950 dark:text-zinc-50'>Kyle Huang</span>
        <span className='text-5xl sm:text-7xl mx-2 sm:mx-4 text-neutral-950 dark:text-zinc-50'>-</span>
      </Marquee>
      <div className='w-full mt-8 flex justify-center mb-4'>
        <div className='w-full max-w-3xl grid grid-rows-[1fr_1px_1fr] sm:grid-cols-[1fr_1px_1fr] sm:grid-rows-none'>
          <div className='grid grid-cols-2 gap-1 p-4 justify-items-center'>
            <Link href='/portfolio' className={`${geist.className} text-xl hover:underline`}>Portfolio</Link>
            <Link href='/blog' className={`${geist.className} text-xl hover:underline`}>Blog</Link>
            <Link href='/projects' className={`${geist.className} text-xl hover:underline`}>Projects</Link>
            <Link href='/resources' className={`${geist.className} text-xl hover:underline`}>Resources</Link>
            <Link href='/shop' className={`${geist.className} text-xl hover:underline`}>Shop</Link>
            <Link href='/contact' className={`${geist.className} text-xl hover:underline`}>Contact</Link>
          </div>
          <div className='h-full w-px bg-neutral-950 dark:bg-zinc-50 mask-image-y hidden sm:inline'></div>
          <div className='w-full h-px bg-neutral-950 dark:bg-zinc-50 mask-image-x inline sm:hidden'></div>
          <div className='grid grid-cols-2 gap-1 p-4 justify-items-center'>
            <Link href='#' className={`${geist.className} text-xl hover:underline`}>Youtube</Link>
            <Link href='#' className={`${geist.className} text-xl hover:underline`}>Linkedin</Link>
            <Link href='#' className={`${geist.className} text-xl hover:underline`}>Instagram</Link>
            <Link href='#' className={`${geist.className} text-xl hover:underline`}>Github</Link>
            <Link href='#' className={`${geist.className} text-xl hover:underline`}>Email</Link>
            <Link href='#' className={`${geist.className} text-xl hover:underline`}>Facebook</Link>
          </div>
        </div>
      </div>
      <div className='max-w-3xl mx-auto w-full py-4 flex justify-center border-t border-zinc-700'>
        <p>© {(new Date().getFullYear())} Kyle Huang. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;