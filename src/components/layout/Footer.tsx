import { Geist } from 'next/font/google';
import { Command } from 'lucide-react';
import Link from 'next/link';
const geist = Geist({
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className={`${geist.className} border-t border-zinc-700 w-full dark:bg-neutral-950 flex justify-center items-center flex-col`}>
      <div className='w-full max-w-5xl flex flex-row flex-wrap gap-8 px-8 justify-center mb-14'>
        <Link href="/"><Command size={64} className='text-neutral-950 dark:text-zinc-50 mt-8'/></Link>
        <div className='flex flex-col ml-10'>
          <h1 className='text-lg font-bold mt-8'>Content</h1>
          <Link href="/portfolio" className='mt-6 text-md font-medium hover:underline'>Portfolio</Link>
          <Link href="/blog" className='mt-2 text-md font-medium hover:underline'>Blog</Link>
          <Link href="/projects" className='mt-2 text-md font-medium hover:underline'>Projects</Link>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold mt-8'>Resources</h1>
          <Link href="/resources" className='mt-6 text-md font-medium hover:underline'>Resources</Link>
          <Link href="/shop" className='mt-2 text-md font-medium hover:underline'>Shop</Link>
          <Link href="/contact" className='mt-2 text-md font-medium hover:underline'>Contact</Link>
        </div>
        <p className="text-neutral-950 dark:text-zinc-50 text-md font-medium mt-8 self-end">© {new Date().getFullYear()} Kyle Huang. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;