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

// About Me Content
const aboutMeIntroduction = `I'm Kyle Huang—a creator, developer, pianist, athlete, and economist. ✨`;
const aboutMeBody1 = `Through a large variety of experiences, I've gained a diverse set of skills. If you'd like to read some of my thoughts, you can check my blog, where I write articles and short stories. 📝`;
const aboutMeBody2 = `I find economics interesting, and I'm currently studying the textbook "Principles of Economics". The book provides me with thought-provoking information and helps me learn quickly. 📖`;
const aboutMeBody3 = `One of my favorite hobbies is web development. I enjoy the process of planning, designing, and building visual experiences. I've worked with the following technologies: `;

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
        <Paragraph text={aboutMeIntroduction} />
        <Paragraph text={aboutMeBody1} />
        <Paragraph text={aboutMeBody2} />
        <Paragraph text={aboutMeBody3} />
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
      </div>
    </div>
  );
}

export default AboutMe