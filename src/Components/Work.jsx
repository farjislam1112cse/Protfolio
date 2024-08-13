import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { FaEye } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from './varients';
import Image from '../images/protfolio1.png'
const Work = () => {
  return (
    <div className='py-12'>
      <div className="container mx-auto">
        < div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=' flex-1 flex flex-col gap-y-32 '>
            {/* text */}
            <div className='text-center lg:text-left'>
              <TypeAnimation
                wrapper='span'
                repeat={Infinity}
                speed={50}
                className='text-slate-50 text-2xl'
                sequence={[
                  'Protfolio--',
                  2000,
                  'Protfolio--',
                  2000,
                ]}
              />
              <h2 className='text-center lg:text-left text-[36px] lg:text-[40px] font-primary text-accent font-semibold uppercase leading-[0.8]'>My Latest <br></br>Work</h2>
              <p className='max-w-sm mb-4'>Explore the range of services I offer as a front-end developer. From responsive web design to API integration.My expertise ensures that your web applications are not only visually appealing but also highly functional and secure</p>
              <button className='btn  btn-sm'>View All Projects</button>
            </div>
            {/* image */}

            <div className='group relative overflow-hidden border-2 border-white/40 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Image} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='font-primary text-gradient text-4xl'>Responsive Design</span>
                <Link><FaEye className='text-2xl' /></Link></div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12'>
            {/* image */}

            <div className='group relative overflow-hidden border-2 border-white/40 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Image} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='font-primary text-gradient text-4xl'>Responsive Design</span>
                <Link><FaEye className='text-2xl' /></Link></div>
            </div>

            {/* image */}

            <div className='group relative overflow-hidden border-2 border-white/40 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Image} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='font-primary text-gradient text-4xl'>Responsive Design</span>
                <Link><FaEye className='text-2xl' /></Link></div>
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default Work;