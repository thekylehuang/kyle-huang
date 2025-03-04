"use client"

import Paragraph from "./Paragraph";
import { Geist_Mono, Geist } from "next/font/google";
// import { useScroll } from "motion/react";
// import { useRef } from "react";

const geistmono = Geist_Mono({
  subsets: ['latin']
})

const geist = Geist({
  subsets: ['latin']
})

const Achievements = () => {
  {/*const imageAnimate = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageAnimate, offset: ['0.9 end', 'start 0.5' ]
  })*/}
  return(
    <div className={`${geist.className} w-full bg-zinc-50 dark:bg-neutral-900 border-b border-b-zinc-700`}>
      <div className="h-full mx-auto w-5/6 max-w-4xl text-neutral-900 dark:text-zinc-50 py-12 border-opacity-0 xs:border-x xs:border-opacity-100 border-zinc-700 px-0 xs:px-8 xl:px-16 box-content">
        <h1 className={`${geistmono.className} text-xl font-extrabold mb-8`}>Achievements</h1>
        <Paragraph>
          In the 2025 AMC 8 (American Mathematics Competition 8), I qualified for honor roll, placing me in the top 5% of competitors.
        </Paragraph>
      </div>
    </div>
  );
}

export default Achievements;