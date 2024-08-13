import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Image from '../images/avatar.png'
import { motion } from 'framer-motion';
import { fadeIn } from './varients';
import { FaDribbble, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Banner = () => {
    return (
        <div id='home' className='section flex  min-h-[85vh] lg:min-h-[70vh] '>
            <div className='container mx-auto flex  flex-col-reverse lg:flex-row'>
                {/* text */}
                <div className=' w-full lg:w-[60%]'>
                    <div className='flex-1 text-center lg:text-left font-secondary'>
                        <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[50px] lg:text-[60px] font-bold leading-[0.8]'>Urmila<span className='ml-5'>Badhon</span></motion.h2>
                        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[0.8] min-h-9 lg:min-h-auto'>
                            <span className=''> I am a </span>
                            <TypeAnimation wrapper='span' repeat={Infinity} speed={50} className='text-accent' sequence={[
                                'Frontend Developer',
                                2000,
                                ' Responsive Designer',
                                2000,
                                ' React Developer',
                                2000,
                            ]}></TypeAnimation>
                        </motion.div>
                    </div>
                    <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 max-w-lg mx-auto lg:mx-0 lg:text-left text-center text-base'>
                        Passionate Frontend Developer skilled in creating dynamic, responsive, and user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, React, and Tailwind. Dedicated to crafting seamless digital experiences and bringing designs to life with precision and creativity.
                    </motion.p>
                    <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex gap-x-6 max-w-max mx-auto lg:mx-0 mb-8  items-center '>
                        <button className='btn btn-lg'>contact me</button>
                        <Link to='/protfolio' className='text-gradient btn-link cursor-pointer'>My Protfolio</Link>
                    </motion.div>
                    {/* social */}
                    <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 py-4 lg:py-0'>
                        <a className='' href='https://github.com/farjislam1112cse?tab=repositories'><FaGithub className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)]'></FaGithub></a>
                        <a href='https://www.linkedin.com/in/farjana-badhon-9b91541b1/'><FaLinkedinIn className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)]' /></a>
                        <a href=''><FaDribbble className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)]'></FaDribbble></a>
                        <a href=''><FaYoutube className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)]'></FaYoutube></a>
                    </motion.div>
                </div>
                {/* image */}
                <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className=' w-full lg:w-[30%] max-w-max mx-auto lg:mx-0 '>

                    <img className=' max-w-[50%] mx-auto lg:max-w-full  rounded-full  bg-gradient-to-r from-[#B809C3] to-[#260129]' src={Image} alt="" />

                </motion.div>
            </div>
        </div>
    );
};
export default Banner;