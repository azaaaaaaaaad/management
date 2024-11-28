"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">Language School</Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link href="/home" className="hover:text-blue-500">
                        Home
                    </Link>
                    <Link href="/home" className="hover:text-blue-500">
                        Contacts
                    </Link>
                    <Link href="/home" className="hover:text-blue-500">
                        Features
                    </Link>
                    <Link href="/dashboard" className="hover:text-blue-500">
                        Dashboard
                    </Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col space-y-4 py-4 px-4 text-gray-700 font-medium">
                        <Link href="/home" className="hover:text-blue-500">
                            Home
                        </Link>
                        <Link href="/home" className="hover:text-blue-500">
                            Contacts
                        </Link>
                        <Link href="/home" className="hover:text-blue-500">
                            Features
                        </Link>
                        <Link href="/dashboard" className="hover:text-blue-500">
                            Dashboard
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
