"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/layout/Preloader";
import { AnimatePresence } from "motion/react";

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
        <div className='relative h-[800px] w-full bg-zinc-50 dark:bg-neutral-950 mt-14'>
        </div>
      </main>
    </>
  );
}

export default HomeComponent;