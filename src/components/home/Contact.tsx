"use client"

import { useRef } from "react";
import { useScroll, motion } from "motion/react";
import { Geist_Mono, Geist } from "next/font/google";
import Paragraph from "./Paragraph";
import { Instagram, Linkedin, Youtube, Github } from "lucide-react";

const geistmono = Geist_Mono({
  subsets: ['latin']
})

const geist = Geist({
  subsets: ['latin']
})

const Contact = () => {
  // Opacity Animation
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element, offset: ['0.9 end', 'start 0.4' ]
  })
  return(
    <div className={`${geist.className} w-full bg-zinc-50 dark:bg-neutral-950`}>
      <div className="h-full mx-auto w-5/6 max-w-4xl text-neutral-950 dark:text-zinc-50 py-24">
        <h1 className={`${geistmono.className} text-xl font-extrabold mb-8`}>Contact</h1>
        <Paragraph>
          You can reach me through my contact form or my social media. If you&apos;d like to talk with me, you can{' '}
          <a href="https://cal.com/kyle-huang" className="underline">schedule a brief meeting.</a>
        </Paragraph>
        <motion.div className="flex gap-2" ref={element} style={{opacity: scrollYProgress}}>
          <a href="https://www.instagram.com/thekylehuang/">
            <div className="bg-zinc-200 p-2 rounded-xl border-2 border-zinc-600 dark:bg-neutral-800">
              <Instagram size={32}/>
            </div>
          </a>
          <a href="https://www.instagram.com/thekylehuang/">
            <div className="bg-zinc-200 p-2 rounded-xl border-2 border-zinc-600 dark:bg-neutral-800">
              <Linkedin size={32}/>
            </div>
          </a>
          <a href="https://www.youtube.com/@the-kyle-huang">
            <div className="bg-zinc-200 p-2 rounded-xl border-2 border-zinc-600 dark:bg-neutral-800">
              <Youtube size={32}/>
            </div>
          </a>
          <a href="https://github.com/thekylehuang">
            <div className="bg-zinc-200 p-2 rounded-xl border-2 border-zinc-600 dark:bg-neutral-800">
              <Github size={32}/>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;