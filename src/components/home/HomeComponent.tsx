"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/layout/Preloader";
import { AnimatePresence } from "motion/react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ['latin']
})

const HomeComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () => {
      document.body.style.overflow = isLoading ? "hidden" : "unset"
    },[isLoading] 
  )
  useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      scrollTo(0,0);
    },[]
  )
  return(
    <>
      <main>
        <AnimatePresence mode="wait">
          {isLoading &&
            <Preloader />
          }
        </AnimatePresence>
        <div className='h-[600px] sm:h-[800px] w-full bg-zinc-50 dark:bg-neutral-950 mt-14'>
          <h1 className={`${geist.className} font-black text-7xl xs:text-9xl sm:text-10xl md:text-11xl lg:text-11xl text-center mt-24 px-0 lg:px-24`}>KYLE HUANG</h1>
        </div>
      </main>
    </>
  );
}

export default HomeComponent;