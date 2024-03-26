'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import localFont from 'next/font/local'
import Orb from './Orb'
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect'
import { useMotionValue, useScroll, useTransform } from 'framer-motion'



const ppmorisemi = localFont({
  src: '../../public/fonts/PPMori-SemiBold.otf',
  variable: '--ppMori',
  weight: '600',
})






function Head() {

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);


  return (
 <div className='h-screen'>
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title='Aradhya Singh'></GoogleGeminiEffect>
 </div>
  )
}

export default Head 