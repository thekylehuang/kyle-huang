"use client";

import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { AnimatePresence, useScroll, useTransform, motion } from "motion/react";
import { Geist } from "next/font/google";
import { useTheme } from "next-themes";
import Image from "next/image";
import Preloader from "@/components/layout/Preloader";
import MarqueeComponent from "./Marquee";
import AboutMe from "./AboutMe";
import Achievements from "./Achievements";
import RecentBlogs from "./RecentBlogs";
import Contact from "./Contact";

const geist = Geist({
  subsets: ['latin']
})

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () => {
      if (isLoading) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
        document.documentElement.style.overflow = "unset";
      }
    },[isLoading] 
  )
  // Lenis Setup
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      if (!isLoading) lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy(); 
    };
  }, [isLoading]);
  // Parallax on Hero
  const heroSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "250%"]);
  const foregroundY = useTransform(scrollYProgress, [0,1], ["0%", "60%"]);
  useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      window.scrollTo(0,0);
    },[isLoading]
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
        <div className='h-[120vh] w-full dark:bg-neutral-950 relative overflow-hidden' ref={heroSectionRef}>
          <motion.h1 className="font-black text-[35vw] sm:text-[clamp(1rem,30vw,700px)] absolute left-0 right-0 text-center z-0 text-black dark:text-zinc-50 leading-none top-[8vh]"
          style={{ y: backgroundY}}>KYLE</motion.h1>
          <motion.div style={{ y: foregroundY }} className="z-10 absolute bottom-0 h-5/6 w-full">
            <Image src='/images/home/Gong Yoo.png' width={3320} height={2940} alt="Literally me" 
            className="mx-auto object-cover h-full w-auto"/>
          </motion.div>
        </div>
        <MarqueeComponent />
        <AboutMe isLight={isLight}/>
        <Achievements />
        <RecentBlogs />
        <Contact />
      </main>
    </>
  );
}

export default HomePage;