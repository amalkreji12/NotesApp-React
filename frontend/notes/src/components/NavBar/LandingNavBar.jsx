/* eslint-disable no-unused-vars */
import React from 'react';
import { IoLogIn } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";

const LandingNavBar = () => {
    const navItems = ['About', 'Features', 'Pricing', 'Contact'];

    return (
        <div>
            <div className="bg-white flex items-center justify-between px-6 py-6 ">
                {/* Logo */}
                <h2 className="text-xl font-medium text-black">myNotes</h2>

                <div className="flex-grow flex justify-center">
                    <nav className="flex space-x-6">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-black transition"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>


                <div className="flex items-center space-x-4">

                    <a href='/login' className="flex items-center space-x-2 text-gray-700 hover:text-black transition">
                        <IoLogIn className="text-2xl" />
                        <span className="hidden sm:inline">Login</span>
                    </a>


                    <a href='/signup' className="flex items-center space-x-2 text-gray-700 hover:text-black transition">
                        <IoIosCreate className="text-2xl" />
                        <span className="hidden sm:inline">Signup</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingNavBar;
