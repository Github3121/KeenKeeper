'use client';
import { ChartLine, Clock3, House } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const currentPath = usePathname();
    const Tabs =
        <>
            <li><Link className={`text-4 text-[#64748B] flex items-center ${currentPath === '/' ? 'bg-[#244D3F] text-white' : ''}`} href={'/'}><House size={20} />Home</Link></li>
            <li><Link className={`text-4 text-[#64748B] flex items-center ${currentPath === '/timeline' ? 'bg-[#244D3F] text-white' : ''}`} href={'/timeline'}><Clock3 size={20} />Timeline</Link></li>
            <li><Link className={`text-4 text-[#64748B] flex items-center ${currentPath === '/status' ? 'bg-[#244D3F] text-white' : ''}`} href={'/status'}><ChartLine size={20} />Status</Link></li>
        </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-[80px] flex justify-between">
            <div className="navbar-start">
                <div className="dropdown absolute top-3 left-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                            {Tabs}
                    </ul>
                </div>
                <Link href={'/'} className="text-[24px] font-extrabold text-[#244D3F]"><span className='text-[#1F2937]'>Keen</span>Keeper</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Tabs}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;