"use client"

import Link from 'next/link';
import { Geist } from 'next/font/google'
import { Command, Menu } from 'lucide-react'
import { ModeToggle } from '@/components/layout/ModeToggle'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const geist = Geist({
  subsets: ['latin'],
})

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleBottomSheet = () => {
    setIsExpanded(prevState => !prevState)
  }

  return (
    <>
      <nav className={`${geist.className} fixed left-0 top-0 flex items-center w-full h-14 border-b border-zinc-700 z-50 bg-zinc-50 dark:bg-neutral-950`}>
        <div className='flex items-center justify-center h-14 px-4 md:px-3 lg:px-6 border-r border-zinc-700 z-0'>
          <button onClick={toggleBottomSheet}><Menu size={20} className='inline md:hidden'/></button>
          <Link href='/' className='text-neutral-950 dark:text-zinc-50 text-base font-bold'><Command size={24} className='hidden md:inline-block md:mr-0 lg:mr-2 align-middle -mt-2px' /><span className='hidden md:hidden lg:inline'>Kyle Huang</span></Link>
        </div>
        <div className='hidden md:inline-block z-0'>
          <Link href='/portfolio' className='text-sm text-neutral-700 dark:text-neutral-400 lg:ml-4 ml-1 font-semibold py-2 lg:px-4 px-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Portfolio</Link>
          <Link href='/blog' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 lg:px-4 px-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Blog</Link>
          <Link href='/projects' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 lg:px-4 px-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Projects</Link>
          <Link href='/resources' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 lg:px-4 px-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Resources</Link>
          <Link href='/shop' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 lg:px-4 px-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Shop</Link>
          <Link href='/contact' className='text-sm text-neutral-700 dark:text-neutral-400 ml-px font-semibold py-2 lg:px-4 px-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors'>Contact</Link>
        </div>
        <div className='fixed right-0 h-14 border-l border-zinc-700 lg:px-6 px-4 flex items-center justify-center z-0'>
          <ModeToggle />
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="fixed md:hidden top-0 left-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-[5px] z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleBottomSheet}
            />
          )}
        </AnimatePresence>
        <motion.div className='fixed -bottom-6 left-0 right-0 w-full bg-zinc-50 dark:bg-neutral-950 shadow-lg border border-zinc-700 h-1/2 rounded-t-2xl md:hidden z-30'
        initial={{ y: '100%' }}
        exit={{ y: '100%' }}
        animate={{ y: isExpanded ? 0 : '100%' }}
        transition={{ type: "spring", damping: 15 }}
        >
          <div className='overflow-y-auto h-full absolute top-2 w-full'>
            <Link href='/' className='text-2xl font-medium text-neutral-700 dark:text-neutral-400 block ml-5 mt-1 w-[calc(100%-2.5rem)]'>Home</Link>
            <div className='w-[calc(100%-2.5rem)] h-px bg-zinc-700 ml-5 mt-3'></div>
            <Link href='/portfolio' className='text-2xl font-medium text-neutral-700 dark:text-neutral-400 block ml-5 mt-3 w-[calc(100%-2.5rem)]'>Portfolio</Link>
            <div className='w-[calc(100%-2.5rem)] h-px bg-zinc-700 ml-5 mt-3'></div>
            <Link href='/blog' className='text-2xl font-medium text-neutral-700 dark:text-neutral-400 block ml-5 mt-3 w-[calc(100%-2.5rem)]'>Blog</Link>
            <div className='w-[calc(100%-2.5rem)] h-px bg-zinc-700 ml-5 mt-3'></div>
            <Link href='/projects' className='text-2xl font-medium text-neutral-700 dark:text-neutral-400 block ml-5 mt-3 w-[calc(100%-2.5rem)]'>Projects</Link>
            <div className='w-[calc(100%-2.5rem)] h-px bg-zinc-700 ml-5 mt-3'></div>
            <Link href='/resourcs' className='text-2xl font-medium text-neutral-700 dark:text-neutral-400 block ml-5 mt-3 w-[calc(100%-2.5rem)]'>Resources</Link>
            <div className='w-[calc(100%-2.5rem)] h-px bg-zinc-700 ml-5 mt-3'></div>
            <Link href='/shop' className='text-2xl font-medium text-neutral-700 dark:text-neutral-400 block ml-5 mt-3 w-[calc(100%-2.5rem)]'>Shop</Link>
            <div className='w-[calc(100%-2.5rem)] h-px bg-zinc-700 ml-5 mt-3'></div>
            <Link href='/contact' className='text-2xl font-medium text-neutral-700 dark:text-neutral-400 block ml-5 mt-3 w-[calc(100%-2.5rem)]'>Contact</Link>
          </div>
        </motion.div>      
      </nav>
    </>
  );
} 

export default Navbar;