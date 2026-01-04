"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function NavBar(){
        
    const navLinks = [
    {name: "Home", href: "/"},
    { name: "About Me", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    
    ];
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <>
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "py-2": "py-0"}`}>
            <div className={`mx-auto transition-all duration-300 bg-gray-400 text-white gap-2 items-center justify-around flex ${scrolled ? "h-12 w-4xl rounded-2xl": "h-10"}`}>
            {navLinks.map((link) =>(
                <Link
                key={link.href}
                href={link.href}
                className={` rounded-xl hover:bg-gray-500 transition-all duration-300 ${scrolled ? "px-3 py-1 text-sm" : "px-4 py-1 text-base"}`}
                >
                    {link.name}
                </Link>
            ))}
            </div>
        </nav>
        </>

    )
}