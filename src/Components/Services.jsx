import React, { useState } from 'react';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fadeIn } from './varients';
import { TypeAnimation } from 'react-type-animation';

const services = [
    {
        name: 'API-Driven Front-End Development',
        description: 'Create dynamic, interactive front-end applications powered by robust APIs. I seamlessly integrate APIs to deliver responsive, data-driven user experiences.',
        link: 'See More'
    },
    {
        name: 'Mobile-First Responsive Web Design',
        description: 'Build responsive, user-friendly websites with Tailwind CSS or Bootstrap. I ensure your site looks great and functions smoothly on any device.',
        link: 'See More'
    },
    {
        name: 'Dynamic Web Applications with React',
        description: 'Build dynamic, high-performance web applications with React. I create responsive, interactive interfaces that deliver a seamless and engaging user experience.',
        link: 'See More'
    },
    {
        name: 'Interactive JavaScript Interfaces',
        description: 'Develop engaging, interactive interfaces using JavaScript to enhance user experience. I bring your website to life with smooth animations and responsive features.',
        link: 'See More'
    },
    {
        name: 'Figma/XD to HTML/PDF Conversion',
        description: 'Convert Figma or XD designs into responsive HTML or professional PDF documents. I ensure precise and clean transformations to bring your designs to life.',
        link: 'See More'
    },
    {
        name: 'Secure User Authentication with Firebase',
        description: 'Implement robust and secure user authentication with Firebase. I ensure seamless login and protection of user data with advanced security features.',
        link: 'See More'
    }
];

const Services = () => {
    // State to track the index of the expanded service
    const [expandedServiceIndex, setExpandedServiceIndex] = useState(null);

    const toggleDescription = (index) => {
        // Toggle the expanded state for the clicked service
        setExpandedServiceIndex(expandedServiceIndex === index ? null : index);
    };
    return (
        <div className='section '>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row justify-between items-center '>
                    {/* text */}
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className='w-full lg:max-w-[50%]'>
                        <div className='text-center lg:text-left'>
                            <TypeAnimation
                                wrapper='span'
                                repeat={Infinity}
                                speed={50}
                                className='text-slate-50 text-2xl'
                                sequence={[
                                    'Services--',
                                    2000,
                                    'Services--',
                                    2000,
                                ]}
                            />
                        </div>
                        <h2 className='text-center lg:text-left text-[36px] lg:text-[40px] font-primary font-semibold uppercase leading-[0.8]'>
                            <span className='text-accent'>What I Do</span>
                        </h2>
                        <div className='mix-blend-lighten'>
                            <img className='max-w-full block' src="src/images/services-bg.png" alt="Services Background" />
                        </div>
                    </motion.div>
                    {/* service */}
                    <motion.div
                        variants={fadeIn('left', 0.6)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className='w-full lg:max-w-[40%]'
                    >
                        {
                            services.map((service, index) => {
                                const { name, description, link } = service;
                                return (
                                    <div className='border-b border-white/20 flex items-center' key={index}>
                                        <div className='py-4 w-[80%]'>
                                            <h4 className='text-[20px] tracking-wider font-primary font-semibold'>{name}</h4>
                                            <p className={`font-secondary leading-tight text-xs overflow-hidden transition-all duration-300 ${expandedServiceIndex === index ? 'max-h-[700px]' : 'max-h-3'}`}>
                                                {description}
                                            </p>
                                        </div>
                                        <div className='text-xs w-[20%] flex flex-col justify-center items-center'>
                                            <button
                                                className='p-2 rounded-full gradient'
                                                onClick={() => toggleDescription(index)}
                                            >
                                                {expandedServiceIndex === index ?
                                                    <IoMdArrowDropupCircle className='text-xl' /> :
                                                    <IoMdArrowDropdownCircle className='text-xl' />
                                                }
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;
