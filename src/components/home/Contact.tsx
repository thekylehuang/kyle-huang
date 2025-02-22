"use client"

import { useRef } from "react";
import { useScroll, motion } from "motion/react";
import { Geist_Mono, Geist } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Paragraph from "./Paragraph";

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
    target: element, offset: ['0.9 end', 'start 0.6' ]
  })
  return(
    <div className={`${geist.className} w-full bg-zinc-50 dark:bg-neutral-950`}>
      <div className="h-full mx-auto w-5/6 max-w-4xl text-neutral-950 dark:text-zinc-50 py-24">
        <h1 className={`${geistmono.className} text-xl font-extrabold mb-8`}>Contact</h1>
        <Paragraph>
          You can reach me through my contact page or my social media.
        </Paragraph>
        <motion.div className="flex gap-4" ref={element} style={{opacity: scrollYProgress}}>
          <a href="https://www.instagram.com/thekylehuang/">
            <div className="bg-zinc-200 w-12 h-12 rounded-md border border-zinc-600 dark:bg-neutral-800 flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </div>
          </a>
          <a href="https://www.instagram.com/thekylehuang/">
            <div className="bg-zinc-200 w-12 h-12 rounded-md border border-zinc-600 dark:bg-neutral-800 flex justify-center items-center">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </div>
          </a>
          <a href="https://www.youtube.com/@the-kyle-huang">
            <div className="bg-zinc-200 w-12 h-12 rounded-md border border-zinc-600 dark:bg-neutral-800 flex justify-center items-center">
            <FontAwesomeIcon icon={faYoutube} size="xl" />
            </div>
          </a>
          <a href="https://github.com/thekylehuang">
            <div className="bg-zinc-200 w-12 h-12 rounded-md border border-zinc-600 dark:bg-neutral-800 flex justify-center items-center">
            <FontAwesomeIcon icon={faGithub} size="xl" />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;