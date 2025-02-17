"use client";

import { useState, useEffect, useRef } from "react";
import Preloader from "@/components/layout/Preloader";
import { AnimatePresence, useScroll, useTransform, motion } from "motion/react";
import { Geist } from "next/font/google";
import Lenis from "lenis";
import MarqueeComponent from "./Marquee";
import Image from "next/image";

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
  {/*Parallax Effect*/}
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const foregroundY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);

  return(
    <>
      <main className="mt-14">
        <AnimatePresence mode="wait">
          {isLoading &&
            <Preloader />
          }
        </AnimatePresence>
        <div className='h-[500px] md:h-[800px] w-full bg-zinc-50 dark:bg-neutral-950 relative overflow-x-hidden' ref={ref}>
          <motion.h1 className={`${geist.className} font-black leading-tight text-7.5xl xs:text-9xl sm:text-10xl md:text-11xl lg:text-11xl px-0 lg:px-24 absolute top-24 left-0 right-0 m-auto text-center z-0`}
          style={{ y: backgroundY}}>KYLE<br />HUANG</motion.h1>
          <motion.div style={{ y: foregroundY }} className="bg-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <Image src='/images/home/Gong Yoo.png' width={1770} height={1740} alt="Literally me" 
            className="absolute max-w-96 xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bottom-0 left-1/2 transform -translate-x-1/2 object-cover z-10"/>
          </motion.div>
        </div>
        <MarqueeComponent />
        <div className='h-[800px] w-full bg-zinc-50 dark:bg-neutral-950'>
        </div>
      </main>
    </>
  );
}

export default HomeComponent;