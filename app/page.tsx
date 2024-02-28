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
      <div className="lg:grid lg:grid-cols-10 ">
        <div className=" col-span-1 border border-black">Hello</div>
        <div className="col-span-8 px-5 md:px-0">
          <Head />
          <About />
          <Exp2 />
          <Pro2 />
          <Contact />
        </div>
        <div className="col-span-1 border border-black ">
          <Navbar />
        </div>
      </div>
    </main>
  )
}
