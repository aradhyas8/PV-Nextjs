import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function Experience() {
    return (
        <section id='Experience' className='my-24'>
            <div>
                <ol className='flex flex-col gap-4 '>
                    <li className=' grid grid-cols-8 gap-4 p-4 border rounded shadow-bx'>
                        <div className='pb-1  col-span-2'>
                            <h3 className=''>JAN 2023 - PRESENT</h3>
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 border border-gray-700 rounded p-4'>
                            <span className='font-semibold '>Business Analyst</span>
                            <span className='font-semibold'>CIBC</span>
                            <span>
                                <ul className='flex flex-col gap-2'>
                                    <li>Reviewing confirmed fraud claims at CIBC and Simplii Financial, employing internal systems and policies to minimize losses and mitigate fraud. Efficiently sorted and assigned incoming fraud claims, marking transactions and managing them on SharePoint. Managed data entry into fraud databases, collaborated with internal and external partners for investigations, and gathered essential information on suspected fraud activities involving CIBC employees.</li>
                                </ul>
                            </span>
                        </div>
                    </li>
                    <li className=' grid grid-cols-8 gap-4 p-4 border rounded shadow-bx'>
                        <div className='pb-1  col-span-2'>
                            <h3 className=''>JAN 2023 - SEPT 2023</h3>
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 border border-gray-700 rounded p-4'>
                            <span className='font-semibold '>Software Developer</span>
                            <span className='font-semibold'>Fibra Inc.</span>
                            <span>
                                <ul className='flex flex-col gap-2'>
                                    <li>Developed Fibra app using React Native and Node.js; implemented RESTful APIs with Firestore for optimized data handling and scalability. Ensured user security with Firebase Auth; leveraged Firestore for improved app performance and data synchronization.</li>
                                </ul>
                            </span>
                        </div>
                    </li>
                    <li className=' grid grid-cols-8 gap-4 p-4 border rounded shadow-bx'>
                        <div className='pb-1  col-span-2'>
                            <h3 className=''>JAN 2023 - SEPT 2023</h3>
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 border border-gray-700 rounded p-4'>
                            <span className='font-semibold '>QA Analyst</span>
                            <span className='font-semibold'>theScore</span>
                            <span>
                                <ul className='flex flex-col gap-2'>
                                    <li>Conducted cross-platform testing for sports media and betting apps on Android, iOS, and Web, ensuring production readiness. Developed and executed test cases in TestRail, participated in bug triaging and coverage tracking for quality assurance. </li>
                                </ul>
                            </span>
                        </div>
                    </li>
                    <li className=' grid grid-cols-8 gap-4 p-4 border rounded shadow-bx'>
                        <div className='pb-1  col-span-2'>
                            <h3 className=''>OCT 2022 - APR 2023</h3>
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 border border-gray-700 rounded p-4'>
                            <span className='font-semibold '>Software Developer</span>
                            <span className='font-semibold'>CS HUB @ York University</span>
                            <span>
                                <ul className='flex flex-col gap-2'>
                                    <li>Led the development of the merchandise store and led the design and build of the Local Hack Day website. I designed and developed the backend architecture for the merch store using SpringBoot, creating scalable APIs and DAO layers. </li>
                                </ul>
                            </span>
                        </div>
                    </li>
                    <li className=' grid grid-cols-8  p-4 border rounded shadow-bx'>
                        <div className='pb-1  col-span-2'>
                            <h3 className=''>SEPT 2022 - AUG 2023</h3>
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 border border-gray-700 rounded p-4'>
                            <span className='font-semibold '>Student Mentor</span>
                            <span className='font-semibold'>York International</span>
                            <span>
                                <ul className='flex flex-col '>
                                    <li>Mentored Lassonde students, assisting with EECS assignments, course selection, and navigating the university system. Acted as a facilitator for students facing challenges, developing support plans in collaboration with Student Support Staff.</li>
                                </ul>
                            </span>
                        </div>
                    </li>
                    <li className=' grid grid-cols-8  p-4 border rounded shadow-bx'>
                        <div className='pb-1  col-span-2'>
                            <h3 className=''>JAN 2023 - MAY 2023</h3>
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 border border-gray-700 rounded p-4'>
                            <span className='font-semibold '>Fullstack Developer</span>
                            <span className='font-semibold'>YU Hacks</span>
                            <span>
                                <ul className='flex flex-col gap-2 '>
                                    <li>Lead the technical team in developing the YuHacks website and mobile app, ensuring alignment with organizational needs and effective communication with participants and sponsors. </li>
                                    <li><span className='font-semibold'>First Prize Winner @ YU Hacks 2022 (Feb 2022):</span> Mentored a team to win first place among 300+ teams in a 24-hour hackathon. Developed a Node.js and Express framework-based project to enhance animal rescue center adoptions. Implemented a search feature, used JSON for data storage, and built a comprehensive dashboard and user profiles for adopters, including a messaging system."</li>
                                </ul>
                            </span>
                        </div>
                    </li>
                </ol>
            </div>

        </section>
    )
}

export default Experience