import React from 'react';

const Footer = () => {
    return (
        <footer className=" py-24 dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <h1 className='my-0 text-2xl drop-shadow-[0_5px_5px_rgba(255,255,255,0.2)]'>CodeCrafters </h1>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <span className="text-sm text-gray-500  dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;