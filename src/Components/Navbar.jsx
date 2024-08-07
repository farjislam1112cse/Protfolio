import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { BsClipboard2Data } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className='fixed bottom-2 w-full'>
            <div className="container mx-auto">
                <div className='bg-black/20 px-5 py-2 w-full backdrop-blur-2xl rounded-full flex justify-between max-w-[460px] mx-auto text-2xl text-white/50'>
                    <Link activeClass='active' smooth={true} spy={true} to='home' className=' cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-slate-100 transition-all]' >
                        <GoHome />
                    </Link>
                    <Link activeClass='active' smooth={true} spy={true} to='about' className='   cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-slate-100 transition-all '>
                        <FaRegUser />
                    </Link>
                    <Link activeClass='active' smooth={true} spy={true} to='service' className='   cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-slate-100 transition-all '>
                        <BsClipboard2Data />
                    </Link>
                    <Link activeClass='active' smooth={true} spy={true} to='work' className='   cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-slate-100 transition-all '>
                        <IoBriefcaseOutline />
                    </Link>
                    <Link activeClass='active' smooth={true} spy={true} to='contact' className='   cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-slate-100 transition-all '>
                        <MdOutlineTextsms />
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;