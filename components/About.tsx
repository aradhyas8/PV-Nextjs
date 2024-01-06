import React from 'react'

function About() {
    return (
        <section id='about' className='flex justify-center items-center'>
            <div className='w-2/3 flex flex-col gap-4'>
            <p>My tech journey began at York University. My professional path in
                the tech world started in January 2023 at theScore in Toronto, where
                I jumped into the role of a Quality Engineering Intern.</p>
            <p>Concurrently, I worked at Fibra Inc. as a Software Developer,
                leading the
                development of their beta app, which was both
                challenging and rewarding.</p>
            <p>Currently, I am serving as a Business Analyst at CIBC, where I've
                been instrumental
                in enhancing fraud detection, reducing operational
                losses by a significant 30%.
                This role has allowed me to apply my analytical skills in a real-world
                financial environment,
                contributing to safer and more efficient banking operations.</p>
            </div>
        </section>
    )
}

export default About