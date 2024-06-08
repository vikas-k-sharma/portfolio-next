import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pt-36 pb-20'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-top-32 md:-left-10 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute left-0 top-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            </div>
            <div className='flex justify-center relative'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic Web Magic with Next.js
                    </p>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless User Experiences' />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos;m Vikas Sharma, a Frontend Developer based in India.
                    </p>
                    <a href="#about">
                        <MagicButton title='Show my work' position='right' icon={<FaLocationArrow />} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero