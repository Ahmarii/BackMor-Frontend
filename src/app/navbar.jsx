"use client"

import {useState} from "react";
import Link from "next/link";

const border_debug = "border-solid border-2 border-red-600 "; // For Debugging

export default function Navbar(){

    // State for dropdown menu 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen) // !false = true
    }

    return (
        <>
            <nav className={"bg-gray-400 p-4 px-8"}>
                <div className="flex items-center justify-between">

                    {/* Toggle Menu Button */}
                    <div className="md:hidden">
                        <button id="menu-toggle" onClick={toggleMenu}>
                            <svg fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Menu Navigator */}
                    <ul className="hidden md:flex space-x-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/login">About</Link></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    {/* Search box */}
                    <div className="relative mt-1 text-black w-full px-4">
                        <input type="text" id="password" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Search..." />
                        <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-4 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Bell and Profile Icon */}
                    <div className="flex justify-between items-center space-x-2">
                        <button>
                            <svg className="size-8" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M23.853 0C17.2934 0 11.9265 5.36693 11.9265 11.9265C11.9265 18.1283 8.82562 23.7338 3.93575 27.7888C1.49081 29.8163 0 32.6786 0 35.7795H47.7061C47.7061 32.6786 46.2749 29.8163 43.7703 27.7888C38.8804 23.7338 35.7795 18.1283 35.7795 11.9265C35.7795 5.36693 30.4722 0 23.853 0ZM17.8898 41.7428C17.8898 45.0226 20.5732 47.7061 23.853 47.7061C27.1328 47.7061 29.8163 45.0226 29.8163 41.7428H17.8898Z" fill="white"/>
                            </svg>
                        </button>
                        <img class="w-10 h-10 rounded-full" src="/pla2.png" alt="Rounded avatar" />
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen ? (
                        <ul className="flex-col md:hidden ">
                            <li><a href="#" className="py-2">Home</a></li>
                            <li><a href="#" className="py-2">About</a></li>
                            <li><a href="#" className="py-2">Team</a></li>
                            <li><a href="#" className="py-2">Contact</a></li>
                        </ul>
                    ): null}
            </nav>

        </>
    );
}