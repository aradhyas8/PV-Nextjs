import React from 'react'
import { Separator } from '@/components/ui/separator'
import localFont from 'next/font/local'
import Orb from './Orb'



const ppmorisemi = localFont({
  src: '../../public/fonts/PPMori-SemiBold.otf',
  variable: '--ppMori',
  weight: '600',
})





function Head() {
  return (
 <div className='border border-white md:grid grid-cols-2 h-[100vh]'>
  <div className='flex flex-col justify-center text-center'>
    <h1>ARADHYA SINGH</h1>
    <h2>Lorem ipsum </h2>
  </div>
  <div>Hello</div>
 </div>
   
  )
}

export default Head