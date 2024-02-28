import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import localFont from 'next/font/local'
import { Separator } from '@/components/ui/separator'

const sfPro = localFont({
    src: '../../public/fonts/SFPro.otf',
    variable: '--sfPro',
})


function Exp2() {
    return (
        <div className='mt-[10rem]'>
            <div className='flex flex-col gap-5 mb-20 '>
                <h1 className='text-5xl py-20 '>I have worked with... </h1>
                
            </div>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-20 text-gray-500 dark:text-gray-400">
                <AccordionItem value="item-1">
                    <AccordionTrigger className=''>
                        <div className='flex w-full '>
                            <div className='flex flex-col w-full text-left'>
                                <h2 className='text-2xl lg:text-3xl '>CIBC</h2>
                                <div className='text-xl lg:text-2xl'>Business Analyst</div>
                            </div>
                            <h2 className='text-xl lg:text-2xl w-full text-right flex justify-end items-center px-5'>Jan 2023 - Present</h2>
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className='px-5 py-10 text-left'>
                        <ol className='prose prose-stone prose-xl dark:prose-invert'>
                            
                            <li> Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial</li>
                            <li> Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment</li>
                            <li> Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className=''>
                        <div className='flex w-full '>
                            <div className='flex flex-col w-full text-left'>
                                <h2 className='text-2xl lg:text-3xl'>CIBC</h2>
                                <div className='text-xl lg:text-2xl'>Business Analyst</div>
                            </div>
                            <h2 className='text-xl lg:text-2xl w-full text-right flex justify-end items-center px-5'>Jan 2023 - Present</h2>
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className='px-5 py-10 text-left'>
                        <ol className='prose prose-stone prose-xl dark:prose-invert'>

                            <li> Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial</li>
                            <li> Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment</li>
                            <li> Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className=''>
                        <div className='flex w-full '>
                            <div className='flex flex-col w-full text-left'>
                                <h2 className='text-2xl lg:text-3xl'>CIBC</h2>
                                <div className='text-xl lg:text-2xl'>Business Analyst</div>
                            </div>
                            <h2 className='text-xl lg:text-2xl w-full text-right flex justify-end items-center px-5'>Jan 2023 - Present</h2>
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className='px-5 py-10 text-left'>
                        <ol className='prose prose-stone prose-xl dark:prose-invert'>

                            <li> Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial</li>
                            <li> Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment</li>
                            <li> Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className=''>
                        <div className='flex w-full '>
                            <div className='flex flex-col w-full text-left'>
                                <h2 className='text-2xl lg:text-3xl'>CIBC</h2>
                                <div className='text-xl lg:text-2xl'>Business Analyst</div>
                            </div>
                            <h2 className='text-xl lg:text-2xl w-full text-right flex justify-end items-center px-5'>Jan 2023 - Present</h2>
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className='px-5 py-10 text-left'>
                        <ol className='prose prose-stone prose-xl dark:prose-invert'>

                            <li> Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial</li>
                            <li> Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment</li>
                            <li> Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className=''>
                        <div className='flex w-full '>
                            <div className='flex flex-col w-full text-left'>
                                <h2 className='text-2xl lg:text-3xl'>CIBC</h2>
                                <div className='text-xl lg:text-2xl'>Business Analyst</div>
                            </div>
                            <h2 className='text-xl lg:text-2xl w-full text-right flex justify-end items-center px-5'>Jan 2023 - Present</h2>
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className='px-5 py-10 text-left'>
                        <ol className='prose prose-stone prose-xl dark:prose-invert'>

                            <li> Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial</li>
                            <li> Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment</li>
                            <li> Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger className=''>
                        <div className='flex w-full '>
                            <div className='flex flex-col w-full text-left'>
                                <h2 className='text-2xl lg:text-3xl'>CIBC</h2>
                                <div className='text-xl lg:text-2xl'>Business Analyst</div>
                            </div>
                            <h2 className='text-xl lg:text-2xl w-full text-right flex justify-end items-center px-5'>Jan 2023 - Present</h2>
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className='px-5 py-10 text-left'>
                        <ol className='prose prose-stone prose-xl dark:prose-invert'>
                            
                            <li> Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial</li>
                            <li> Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment</li>
                            <li> Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees</li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Exp2