import About from "./components/About"
import Contact from "./components/Contact"
import Exp2 from "./components/Exp2"
import Head from "./components/Head"
import Navbar from "./components/Navbar"
import Pro2 from "./components/Pro2"
import localFont from 'next/font/local'



const ppmori = localFont({
  src: '../public/fonts/PPMori-Regular.otf',
  variable: '--ppmori',
})



export default function Home() {
  return (
    <main className='font-ppmori overflow-x-hidden border'>
      
          <Head />
          <About />
          <Exp2 />
          <Pro2 />
          <Contact />
          <Navbar />
    
    </main>
  )
}
