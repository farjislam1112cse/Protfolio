import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { fadeIn } from './varients';
import { TypeAnimation } from 'react-type-animation';
import Swal from 'sweetalert2';
import 'animate.css';
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kk0kged', 'template_tiqjlga', form.current, 'C0q820twKQ9uYjQCy')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: "Thank you for reaching out! Stay tuned",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: "An error occurred, please try again later.",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            });

        e.target.reset(); // Reset the form after submission
    };

    return (
        <div className='pb-24 lg:section'>
            <div className="container mx-auto">
                {/* text */}
                <div className='flex flex-col items-center lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1'>
                        <div className='text-center lg:text-left'>
                            <TypeAnimation
                                wrapper='span'
                                repeat={Infinity}
                                speed={50}
                                className='text-slate-50 text-2xl lg:text-5xl'
                                sequence={[
                                    "Get in touch--",
                                    2000,
                                    "Get in touch--",
                                    2000,
                                ]}
                            />
                        </div>
                        <h2 className='text-center lg:text-left text-[36px] lg:text-[40px] font-primary font-semibold uppercase leading-[0.8]'>
                            <span className='text-accent'>Let's work together</span>
                        </h2>
                        {/* contact */}

                        <div className='flex justify-center lg:justify-start '>
                            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex flex-col py-6 text-base space-y-4'>
                                <a className=' flex gap-2 items-center' href='https://github.com/farjislam1112cse?tab=repositories'><MdOutlineLocalPhone className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)]'></MdOutlineLocalPhone><span>01894070897</span> </a>
                                <a className='flex gap-2 items-center' href='https://www.linkedin.com/in/farjana-badhon-9b91541b1/'>
                                    <MdOutlineMail className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)]' /> <span>farjislam1112@gmail.com</span></a>
                                <a className='flex gap-2 items-center' href=''>
                                    <CiLocationArrow1 className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)]'>
                                    </CiLocationArrow1> <span>Dhaka,Bangladesh</span></a>
                                <a className='flex gap-2 items-center' href=''>
                                    <IoMdTime className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)]'></IoMdTime><span>11am-11pm</span></a>
                            </motion.div>
                        </div>

                    </motion.div>
                    {/* form */}
                    <div className='w-full lg:w-[50%] '>
                        <motion.form
                            ref={form}
                            onSubmit={sendEmail}
                            variants={fadeIn('left', 0.6)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }} className='flex-1 space-y-4'>
                            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder='Your name' type="text" name="user_name" required />
                            <input className='bg-transparent autofill border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder='Your email' type="email" name="user_email" required />
                            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none' placeholder='Your message' name="message" />
                            <button type="submit" className='btn btn-lg'>Send Message</button>
                        </motion.form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
