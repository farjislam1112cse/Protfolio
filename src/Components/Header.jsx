import React from 'react';
const Header = () => {
    return (
        <div id='home' className=' py-8 w-full'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <a className='flex flex-col items-center' href=''>
                        <h1 className='my-0 text-2xl drop-shadow-[0_5px_5px_rgba(255,255,255,0.2)]'>CodeCrafters </h1>
                        <span className='my-0 text-xs'>Your Vision , My Code</span>
                    </a>
                    <button className='btn btn-sm'>Work With Me</button>
                </div>
            </div>
        </div>
    );
};

export default Header;