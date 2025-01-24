"use client"

import { Geist } from 'next/font/google';
import './Navbar.css';
import Link from 'next/link';
import { useState } from "react";
import { Mail, House, BriefcaseBusiness, TrendingUp, Feather, LogIn, UserPlus } from 'lucide-react';


const geist = Geist({ subsets: ['latin'] })

const Navbar = () => {
  const [expanded, toggleExpanded] = useState(false);

  const toggleNavbar = () => {
    toggleExpanded((prevState) => !prevState);
  };
  return (
    <>
      <div className="navbar">
        <Link href="/" className={`${geist.className} absolute font-bold left-8 z-10 text-3xl top-5 hidden lg:inline-block`}>Kyle Huang</Link>
        <nav className={`${geist.className} ${expanded ? "expanded" : ""} center-navbar`}>
          <Link href="/" className='nav-link home'><House className='home-icon' size={20}/>Home</Link>
          <div className='separator'></div>
          <Link href="/portfolio" className='nav-link portfolio'>Portfolio</Link>
          <Link href="/hermien" className='nav-link hermien'>Hermien</Link>
          <Link href="/blog" className='nav-link blog'>Blog</Link>
          <Link href="/contact" className='contact'><Mail className="contact-icon" size={20}/>Contact</Link>
          <div className="menu-btn" role="button" onClick={toggleNavbar}>
            <div className={`menu-btn-icon ${expanded ? 'animate-menu-icon' : ''}`}></div>
          </div>
        </nav>
        <Link href="/login" className={`${geist.className} absolute font-semibold top-5 bg-neutral-800 px-4 py-1 rounded-lg text-neutral-200 border border-neutral-700 hover:border-neutral-600 right-36 hidden lg:inline-block transition-colors`}>Login</Link>
        <Link href="/signup" className={`${geist.className} absolute right-8 top-5 font-semibold bg-violet-950 px-4 py-1 rounded-lg border border-violet-800 hover:border-violet-700 hidden lg:inline-block transition-colors`}>Sign Up</Link>
      </div>
      <div className={`expanded-content ${expanded ? 'reveal-expanded' : ''}`}>
        <Link href="/portfolio" className="expanded-link"><BriefcaseBusiness className='expanded-link-icon' size={20} />Portfolio</Link>
        <Link href="/hermien" className="expanded-link"><TrendingUp className='expanded-link-icon' size={20} />Hermien</Link>
        <Link href="/blog" className="expanded-link"><Feather className='expanded-link-icon' size={20} />Blog</Link>
        <Link href="/contact" className="expanded-link"><Mail className='expanded-link-icon' size={20} />Contact</Link>
        <Link href="/login" className="expanded-link"><LogIn className='expanded-link-icon' size={20} />Login</Link>
        <Link href="/signup" className="expanded-link"><UserPlus className='expanded-link-icon' size={20} />Sign Up</Link>
      </div>
    </>
  );
}

export default Navbar;