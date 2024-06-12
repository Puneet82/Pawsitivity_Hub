import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="navbar bg-[#388697] text-white flex justify-between items-center py-4 px-6">
            {/* Left side of the navbar */}
            <div className="navbar-start">
                {/* Logo */}
                <Link href="/" className="text-2xl lg:text-2xl font-bold cursor-pointer">Pawsitivity Hub</Link>
            </div>

            {/* Center of the navbar, hidden on small screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li><Link href="/" className="text-lg hover:bg-[#F79D5C] px-4 py-2">Home</Link></li>
                    <li>
                        <details>
                            <summary className="text-lg hover:bg-[#F79D5C] px-4 py-2">Services</summary>
                            <ul className="p-2"> 
                                <li><Link href="/daycare" className="text-lg hover:bg-[#F79D5C]">Dog Daycare</Link></li>
                                <li><Link href="/dogwalking" className="text-lg hover:bg-[#F79D5C]">Dog Walking</Link></li>
                                <li><Link href="/dogspa" className="text-lg hover:bg-[#F79D5C]">Dog Spa</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="/about" className="text-lg hover:bg-[#F79D5C] px-4 py-2">About Us</Link></li>
                </ul>
            </div>

            {/* Right side of the navbar */}
            <div className="navbar-end">
                {/* Button to book services */}
                <Link href="/bookuspage">
                <button className="btn bg-[#388697] text-white text-lg px-4 py-2 rounded-lg hover:bg-[#F79D5C] hover:text-[#388697]">
        Book Us
    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
