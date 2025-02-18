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
  const foregroundY = useTransform(scrollYProgress, [0,1], ["0%", "20%"]);

  return(
    <>
      <main className="mt-14">
        <AnimatePresence mode="wait">
          {isLoading &&
            <Preloader />
          }
        </AnimatePresence>
        <div className='h-[calc(100vh-55px)] w-full bg-zinc-50 dark:bg-neutral-950 relative overflow-x-hidden' ref={ref}>
          <motion.h1 className={`${geist.className} font-black leading-tight text-[35vw] sm:text-[clamp(1rem,30vw,700px)] absolute top-0 left-0 right-0 m-auto text-center z-0`}
          style={{ y: backgroundY}}>KYLE</motion.h1>
          <motion.div style={{ y: foregroundY }} className="z-10 absolute bottom-0 h-5/6 w-full">
            <Image src='/images/home/Gong Yoo.png' width={3320} height={2940} alt="Literally me" 
            className="mx-auto object-cover h-full w-auto"/>
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