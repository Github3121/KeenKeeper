import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10 gap-10 overflow-hidden">
            <div className='flex flex-col justify-between items-center gap-6'>
                <div className='flex flex-col justify-between items-center gap-4 text-center'>
                    <h1 className='text-5xl md:text-7xl lg:text-7xl font-bold text-white'>KeenKeeper</h1>
                    <p className='flex flex-wrap font-regular text-[16px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div className='flex flex-col gap-4 text-[20px] font-regular text-white'>
                    Social Links
                    <div className='flex justify-center items-center gap-3'>
                        <span className='bg-white rounded-full text-black p-[10px]'><AiFillInstagram /></span>
                        <span className='bg-white rounded-full text-black p-[10px]'><FaSquareFacebook /></span>
                        <span className='bg-white rounded-full text-black p-[10px]'><FaXTwitter /></span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-3 md:gap-[450px] pt-[30px] text-[#FAFAFA] border-gray-500 border-t'>
                <p className=''>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex justify-between items-center gap-10 text-[#FAFAFA]'>
                    <Link href={'#'}>Privacy Policy</Link>
                    <Link href={'#'}>Terms of Service</Link>
                    <Link href={'#'}>Cookies</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;