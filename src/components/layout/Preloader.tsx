"use client"

import { useState, useEffect } from "react";
import { easeOut, motion } from "motion/react";

const Preloader = () => {
  const words = ["Kyle Huang", "黄遇安", "카일 황", "كايل هوانغ", "कायल हुआंग", "Κάιλ Χουάνγκ", "קייל חואנג"];
  const [index, setIndex] = useState(0);

  useEffect(
    () => {
      if(index == words.length - 1) return;
      setTimeout(() => {
        setIndex(index + 1);
      }, index == 0 ? 800 : 200)
    },[index, words.length]
  )
  return(
    <motion.div 
    initial={{ y: 0 }}
    exit={{ y: "-100vh" }}
    transition={{ ease: easeOut, duration: 0.5 }}
    className="h-full w-full fixed top-0 left-0 z-100 bg-zinc-50 dark:bg-neutral-950 flex items-center justify-center border-b border-zinc-700">
      <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: easeOut, duration: 0.4 }}
      className="font-extrabold text-4xl sm:text-5xl text-neutral-950 dark:text-zinc-50">
        {words[index]}
      </motion.h1>
    </motion.div>
  );
}

export default Preloader;