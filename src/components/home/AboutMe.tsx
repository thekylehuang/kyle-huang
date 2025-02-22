"use client"

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import Paragraph from "./Paragraph";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ['latin']
})
const geistmono = Geist_Mono({
  subsets: ['latin']
})

const AboutMe = ({isLight} : {isLight : boolean}) => {
  // Opacity Animation
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element, offset: ['0.9 end', 'start 0.4' ]
  })
  return(
    <div className={`${geist.className} w-full bg-zinc-50 dark:bg-neutral-950 border-b border-b-zinc-700`}>
      <div className="h-full mx-auto w-5/6 max-w-4xl text-neutral-950 dark:text-zinc-50 py-24">
        <h1 className={`${geistmono.className} text-xl font-extrabold mb-8`}>About</h1>
        <Paragraph>
          I&apos;m Kyle Huang—a creator, developer, pianist, athlete, and economist. ✨
        </Paragraph>
        <Paragraph>
          Through a variety of experiences, I&apos;ve gained a diverse set of skills. If you&apos;d like to read some of my thoughts, you can check my blog, where I write articles and stories. 📝
        </Paragraph>
        <Paragraph>
          I find economics interesting, and I&apos;m currently studying the textbook &quot;Principles of Economics&quot;. The book provides me with thought-provoking information and helps me learn quickly. 📖
        </Paragraph>
        <Paragraph>
          One of my favorite hobbies is web development. I enjoy the process of planning, designing, and building visual experiences. I&apos;ve worked with the following technologies: 
        </Paragraph>
        <motion.img 
        src={isLight ? "https://skillicons.dev/icons?i=html,css,js,ts,nodejs,react,nextjs,tailwind,supabase,vercel,vite,github&perline=6&theme=light" : "https://skillicons.dev/icons?i=html,css,js,ts,nodejs,react,nextjs,tailwind,supabase,vercel,vite,github&perline=6&theme=dark"} 
        alt="Icons of HTML, CSS, JavaScript, TypeScript, NodeJS, React, Next.js, Tailwind CSS, Supabase, Vercel, Vite, and Github shown in a 2x6 grid." 
        className="mb-4"
        style={{ opacity : scrollYProgress }}
        ref={element} />
        <motion.a target="_blank" 
        rel="noopener noreferrer" 
        href="https://skillicons.dev/" 
        className="font-medium text-sm underline"
        ref={element}
        style={{ opacity : scrollYProgress }}>
          Icons by Skill Icons
        </motion.a>
        <Paragraph>
          Another one of my endeavors is learning languages. I&apos;d like to be trilingual before the end of high school. Currently, I am fluent in English and learning Mandarin and Korean. 🗣️
        </Paragraph>
      </div>
    </div>
  );
}

export default AboutMe