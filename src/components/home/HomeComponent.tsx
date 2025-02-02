"use client";

import React, { useState, useEffect } from 'react';
import Preloader from '@/components/layout/Preloader';
import { AnimatePresence } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei'
import { Model } from './Model';

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
          <Canvas className="z-20">
            <Environment preset="city" />
            <directionalLight intensity={2} position={[0, 2, 3]}/>
            <Model />
          </Canvas>
        </div>
      </main>
    </>
  );
}
export default HomeComponent;
