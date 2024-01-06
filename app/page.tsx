import Image from 'next/image'
import { Button } from "@/components/ui/button"
import About from '@/components/About'
import Experience from '@/components/Experience'

export default function Home() {
  return (
 <main className='py-24 px-24 '>
  <About />
  <Experience />
 </main>
  )
}
