import React from 'react'
import { Separator } from '@/components/ui/separator'
import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'

const sfPro = localFont({
  src: '../../public/fonts/SFPro.otf',
  variable: '--sfPro',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--openSans",
  weight: ['400', '500', '700']
});

function Pro2() {
  return (
    <div className='flex flex-col mt-20 '>
      <div>
        <h1 className='text-5xl py-20'>I have built...</h1>
         </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 text-gray-500 dark:text-gray-400'>
        <div className='flex gap-5 mb-10'>
          <Separator orientation='vertical' className='bg-gray-200 dark:bg-gray-800' />
          <div className='flex flex-col sm: gap-10 md:justify-between'>
            <h1 className=' text-7xl text-white font-outline-4 font-bold'>01</h1>
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg'>FaceLog</h3>
              <p className='text-base'>FaceLog automates attendance tracking using real-time facial recognition technology, seamlessly logging each entry with timestamps for accurate record-keeping.</p>
              <Separator className='bg-gray-200 dark:bg-gray-800' />
              <p className='text-base'>JAVASCRIPT, NODE.JS, MONGO DB, GRAPHQL, EXPRESS.JS, REACT, TAILWIND CSS</p>
            </div>
          </div>
          
        </div>
        

        <div className='flex gap-5 mb-10'>
          <Separator orientation='vertical' className='bg-gray-200 dark:bg-gray-800' />
          <div className='flex flex-col sm: gap-10 md:justify-between'>
            <h1 className=' text-7xl text-gray-400'>02</h1>
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg'>Algo Visual</h3>
              <p className='text-base'>AlgoVisual offers an interactive experience to understand sorting algorithms like Bubble, Insertion, and Selection Sort, featuring dynamic array visualization for educational insights.</p>
              <Separator className='bg-gray-200 dark:bg-gray-800' />
              <p className='text-base'>JAVASCRIPT, NODE.JS, MONGO DB, GRAPHQL, EXPRESS.JS, REACT, TAILWIND CSS</p>
            </div>
          </div>
          
        </div>


        <div className='flex gap-5 mb-10'>
          <Separator orientation='vertical' className='bg-gray-200 dark:bg-gray-800' />
          <div className='flex flex-col sm: gap-10 md:justify-between'>
            <h1 className=' text-7xl text-gray-400'>03</h1>
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg'>VoiceGenius</h3>
              <p className='text-base'>AVoiceGenius is a multifunctional voice assistant, enhancing daily routines with features like music playback, timekeeping, Wikipedia searches, joke-telling, and weather forecasts.</p>
              <Separator className='bg-gray-200 dark:bg-gray-800' />
              <p className='text-base'>JAVASCRIPT, NODE.JS, MONGO DB, GRAPHQL, EXPRESS.JS, REACT, TAILWIND CSS</p>
            </div>
          </div>

        </div>


        <div className='flex gap-5 mb-10'>
          <Separator orientation='vertical' className='bg-gray-200 dark:bg-gray-800' />
          <div className='flex flex-col sm: gap-10 md:justify-between'>
            <h1 className=' text-7xl text-gray-400'>04</h1>
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg'>CS Hub : Local Hack Day</h3>
              <p className='text-base'>HackConverge, the centralized platform for Local Hack Day 2023, showcases a blend of innovative design and development, enhancing the hackathon experience.</p>
              <Separator className='bg-gray-200 dark:bg-gray-800' />
              <p className='text-base'>JAVASCRIPT, NODE.JS, MONGO DB, GRAPHQL, EXPRESS.JS, REACT, TAILWIND CSS</p>
            </div>
          </div>

        </div>



        <div className='flex gap-5 mb-10'>
          <Separator orientation='vertical' className='bg-gray-200 dark:bg-gray-800' />
          <div className='flex flex-col sm: gap-10 md:justify-between'>
            <h1 className=' text-7xl text-gray-400'>05</h1>
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg'>Data Visualizer</h3>
              <p className='text-base'>DataInsightPro, an EECS 3311 project, transforms World Bank API data into compelling visual narratives, facilitating intuitive data analysis and insights.</p>
              <Separator className='bg-gray-200 dark:bg-gray-800' />
              <p className='text-base'>JAVASCRIPT, NODE.JS, MONGO DB, GRAPHQL, EXPRESS.JS, REACT, TAILWIND CSS</p>
            </div>
          </div>

        </div>



        <div className='flex gap-5 mb-10'>
          <Separator orientation='vertical' className='bg-gray-200 dark:bg-gray-800' />
          <div className='flex flex-col sm: gap-10 md:justify-between'>
            <h1 className=' text-7xl text-gray-400'>06</h1>
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg'>yuHacks</h3>
              <p className='text-base'>HackSphere, the comprehensive platform for yuHacks 2023, integrates advanced full-stack technologies to deliver a seamless and engaging event experience.</p>
              <Separator className='bg-gray-200 dark:bg-gray-800' />
              <p className='text-base'>JAVASCRIPT, NODE.JS, MONGO DB, GRAPHQL, EXPRESS.JS, REACT, TAILWIND CSS</p>
            </div>
          </div>

        </div>

        <div className='flex gap-5 mb-10'>
          <Separator orientation='vertical' className='bg-gray-200 dark:bg-gray-800' />
          <div className='flex flex-col sm: gap-10 md:justify-between'>
            <h1 className=' text-7xl text-gray-400'>07</h1>
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg'>API Builder</h3>
              <p className='text-base'>APIBuilder empowers users to create personalized APIs with ease, offering customizable endpoints and intuitive interface for diverse applications.</p>
              <Separator className='bg-gray-200 dark:bg-gray-800' />
              <p className='text-base'>JAVASCRIPT, NODE.JS, MONGO DB, GRAPHQL, EXPRESS.JS, REACT, TAILWIND CSS</p>
            </div>
          </div>

        </div>

        <div className='flex gap-5 mb-10'>
          <Separator orientation='vertical' className='bg-gray-200 dark:bg-gray-800' />
          <div className='flex flex-col sm: gap-10 md:justify-between'>
            <h1 className=' text-7xl text-gray-400'>08</h1>
            <div className='flex flex-col gap-3'>
              <h3 className='text-lg'>ForTheHorses</h3>
              <p className='text-base'>The award-winning animal rescue app from YUHacks 2022, connects rescuers and adopters with features like search, a user-friendly dashboard, adopter matching, and in-app messaging.</p>
              <Separator className='bg-gray-200 dark:bg-gray-800' />
              <p className='text-base'>JAVASCRIPT, NODE.JS, MONGO DB, GRAPHQL, EXPRESS.JS, REACT, TAILWIND CSS</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Pro2