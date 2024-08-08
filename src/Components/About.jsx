import React from 'react';
import Image from '../images/about-bg.png'
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from './varients';
const About = () => {

    const [ref, inView] = useInView(
        {
            threshold: "0.5",
        }
    )

    return (
        <div id='about' className='section' ref={ref}>
            <div className='container mx-auto flex flex-col-reverse gap-y-2 gap-x-4 lg:flex-row justify-between items-center'>
                {/* image */}
                <motion.div variants={fadeIn('right', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=' w-[100%] lg:w-[50%] mix-blend-lighten ' >
                    <img className='max-w-[100%] mx-auto block' src={Image} alt="" />
                </motion.div>
                {/* text */}
                <motion.div variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='w-[100%] lg:w-[50%] text-center lg:text-left '>
                    <p>Nice to meet you-</p>
                    <h2 className=' text-center lg:text-left mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[0.8]'>Everything
                        <span className='text-accent'> About Me</span></h2>
                    {/* about description */}
                    <div className='text-xs space-y-4'>
                        <p>I’m a web designer and developer with a great passion for building things with code. I live in beautiful kushita in the southwest of Bangladesh, where I create amazing websites design and develope. just like you are gonna see in one of my portfolio website.</p>

                        <p>I have a lot of skills Html5, Css3, Sass, Bootstrap, Tailwind, JavaScript, React.js and Redux, and i also familiar with Vue.js Node.js, and MongoDB.</p>
                    </div>
                    {/* countup */}
                    <div className='flex flex-col lg:flex-row gap-x-4 py-4 '>
                        <div className=''>
                            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                {inView ? <CountUp start={0} end={2} duration={3}></CountUp> : null}
                              +
                            </div>
                            <div className='font-secondary space-x-2 font-semibold text-sm tracking-[2px]'>
                                <span>Years Of</span>
                                <span>Experience</span>
                            </div>
                        </div>
                        <div>
                            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                {inView ? <CountUp start={0} end={13} duration={3}></CountUp> : null}
                                <span>+</span>
                            </div>
                            <div className='font-secondary space-x-2 font-semibold text-sm tracking-[2px]'>
                                <span>Project</span>
                                <span>Complete</span>
                            </div>
                        </div>
                        <div>
                            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                {inView ? <CountUp start={0} end={10} duration={3}></CountUp> : null}
                                <span>+</span>
                            </div>
                            <div className='font-secondary space-x-2 font-semibold text-sm tracking-[2px]'>
                                <span>Happy</span>
                                <span>Client</span>
                            </div>
                        </div>
                    </div>
                    {/* Ctl */}
                    <div className='flex gap-x-6 max-w-max mx-auto lg:mx-0 mt-8 items-center '>
                        <button className='btn btn-lg'>contact me</button>
                        <a href='' className='text-gradient btn-link'>my protfolio</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;