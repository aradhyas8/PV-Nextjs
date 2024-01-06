import React from 'react'
import { Button } from "@/components/ui/button"


function Navbar() {
  return (
    <div className='flex flex-col items-center gap-7 py-20 my-20'>
      <Button variant='outline'>About</Button>
      <Button variant='outline'>Project</Button>
      <Button variant='outline'>Experience</Button>
    </div>
  )
}

export default Navbar