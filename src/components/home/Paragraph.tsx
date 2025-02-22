"use client"

import { Libre_Baskerville } from "next/font/google";
import { useScroll, motion } from "motion/react";
import { ReactNode, useRef } from "react";

const librebaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700']
})

const Paragraph = ({children}: {children: ReactNode }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element, offset: ['0.9 end', 'start 0.6' ]
  })
  return(
    <motion.p className={`${librebaskerville.className} mt-8 mb-8 text-2xl sm:text-3xl font-regular flex flex-wrap`} 
    ref={element}
    style={{ opacity: scrollYProgress }}>
      {children}
    </motion.p>
  );
}

export default Paragraph;