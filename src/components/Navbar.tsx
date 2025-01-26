"use client"

import Link from 'next/link';
import { Geist } from 'next/font/google'
import { Command, ChevronRight } from 'lucide-react'
import { ModeToggle } from '@/components/ModeToggle';

const geist = Geist({
  subsets: ['latin'],
})

const Navbar = () => {
  return (
    <>
      <nav className={`${geist.className} fixed left-0 top-0 flex items-center w-full h-14 border-b border-zinc-700 z-50 bg-zinc-50 dark:bg-neutral-950`}>
        <div className='flex items-center justify-center h-14 px-6 border-r border-zinc-700'>
          <Link href='/' className='text-neutral-950 dark:text-zinc-50 text-base font-bold'><Command size={24} className='inline mr-2 align-middle -mt-2px' />Kyle Huang</Link>
        </div>
        <div className='hidden lg:inline-block'>
          <Link href='/portfolio' className='text-sm text-neutral-700 dark:text-neutral-400 ml-4 font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Portfolio</Link>
          <Link href='/blog' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Blog</Link>
          <Link href='/projects' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Projects</Link>
          <Link href='/resources' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Resources</Link>
          <Link href='/shop' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Shop</Link>
          <Link href='/contact' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Contact</Link>
        </div>
        <div className='fixed right-0 h-14 border-l border-zinc-700 px-6 flex items-center justify-center'>
          <ModeToggle />
          <Link href='login' className='dark:text-zinc-50 text-xs dark:bg-neutral-800 py-1.5 px-3 rounded-md border dark:border-neutral-700 font-medium mr-3 dark:hover:border-zinc-600 transition-colors text-neutral-950 bg-neutral-100'>Sign In</Link>
          <Link href='signup' className='text-zinc-50 text-xs bg-violet-800 dark:bg-violet-950 py-1.5 px-3 rounded-md border dark:border-violet-800 font-medium hover:bg-purple-pale dark:hover:border-violet-700 transition-colors border-purple-950'>Get Started<ChevronRight size={14} className='inline ml-1 text-zinc-300 -mt-2px' /></Link>
        </div>      
      </nav>
    </>
  );
} 

export default Navbar;