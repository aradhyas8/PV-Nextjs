import React from 'react'
import { Text, Container, Separator } from '@radix-ui/themes'
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons'


function About() {
    return (
        <section className='lg:grid lg:grid-cols-5 my-20'>
            <div className='col-span-3 flex justify-center items-center '>
                <div className='text-lg  text-gray-500 dark:text-gray-400 md:w-2/3'>
                    <h3 className=''>Hello World.</h3>
                    <p className='leading-loose'>
                        As a programmer extraordinaire, I juggle two roles: slaying bugs as an intern QA Developer at theScore and weaving code magic as a Software Developer at Fibra, Software development is my playground, and I'm always hungry for new challenges to devour. Let's team up and code the world into a better place!
                    </p>
                </div>
            </div>
            <div className=' text-base sm:col-span-1 md:col-span-2 flex justify-center dark:text-gray-400 '>
                <div className='flex flex-col gap-1 justify-end '>
                    <div>
                        <h3 className='py-2'>Let's get connected</h3>
                        <Separator className='bg-gray-400' size='4' />
                    </div>
                    <div className='flex justify-between'>
                        <h3 className=''>GitHub</h3>
                        <GitHubLogoIcon />
                    </div>
                    <div className='flex justify-between'>
                        <h3 className=''>LinkedIn</h3>
                        <LinkedInLogoIcon />
                        
                    </div>
                    <div className='flex justify-between'>
                        <h3 className=''>E-mail</h3>
                        <EnvelopeOpenIcon  />
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About