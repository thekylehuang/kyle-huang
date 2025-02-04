"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/layout/Preloader";
import { AnimatePresence } from "motion/react";
import { Geist } from "next/font/google";
import Lenis from "lenis";
import MarqueeComponent from "./Marquee";

const geist = Geist({
  subsets: ['latin']
})

const HomeComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy(); 
    };
  }, []);
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
      <main className="mt-14">
        <AnimatePresence mode="wait">
          {isLoading &&
            <Preloader />
          }
        </AnimatePresence>
        <div className='h-[600px] sm:h-[800px] w-full bg-zinc-50 dark:bg-neutral-950'>
          <h1 className={`${geist.className} font-black text-7xl xs:text-9xl sm:text-10xl md:text-11xl lg:text-11xl px-0 lg:px-24 absolute top-24 left-0 right-0 m-auto text-center`}>KYLE HUANG</h1>
        </div>
        <MarqueeComponent />
        <div className='h-[800px] w-full bg-zinc-50 dark:bg-neutral-950'>

        </div>
      </main>
    </>
  );
}

export default HomeComponent;