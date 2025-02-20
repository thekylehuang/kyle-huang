"use client";

import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { AnimatePresence, useScroll, useTransform, motion } from "motion/react";
import { Geist } from "next/font/google";
import Image from "next/image";
import Preloader from "@/components/layout/Preloader";
import MarqueeComponent from "./Marquee";
import AboutMe from "./AboutMe";
import { useTheme } from "next-themes";

const geist = Geist({
  subsets: ['latin']
})

const HomeComponent = () => {
  // Lenis Setup
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
  // Preloader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () => {
      document.body.style.overflow = isLoading ? "hidden" : "unset"
    },[isLoading] 
  )
  // Parallax on Hero
  const heroSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "150%"]);
  const foregroundY = useTransform(scrollYProgress, [0,1], ["0%", "60%"]);
  useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      scrollTo(0,0);
    },[]
  )
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const isLight = resolvedTheme === "light";
  if (!mounted) return null;

  return(
    <>
      <main className={`${geist.className} mt-14`}>
        <AnimatePresence mode="wait">
          {isLoading &&
            <Preloader />
          }
        </AnimatePresence>
        <div className='h-[120vh] w-full bg-zinc-50 dark:bg-neutral-950 relative overflow-hidden' ref={heroSectionRef}>
          <motion.h1 className="font-black leading-tight text-[35vw] sm:text-[clamp(1rem,30vw,700px)] absolute top-0 left-0 right-0 m-auto text-center z-0"
          style={{ y: backgroundY}}>KYLE</motion.h1>
          <motion.div style={{ y: foregroundY }} className="z-10 absolute bottom-0 h-5/6 w-full">
            <Image src='/images/home/Gong Yoo.png' width={3320} height={2940} alt="Literally me" 
            className="mx-auto object-cover h-full w-auto"/>
          </motion.div>
        </div>
        <MarqueeComponent />
        <AboutMe isLight={isLight}/>
      </main>
    </>
  );
}

export default HomeComponent;