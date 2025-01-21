"use client"

import { Geist } from 'next/font/google'
import './Navbar.css'
import Link from 'next/link'
import { useState } from "react";
import Image from 'next/image';

const geist = Geist({ subsets: ['latin'] })

const Navbar = () => {
  const [expanded, toggleExpanded] = useState(false);

  const toggleNavbar = () => {
    toggleExpanded((prevState) => !prevState);
  };
  return (
    <>
      <nav className={`${geist.className} ${expanded ? "expanded" : ""}`}>
        <Link href="/" className='nav-link home'><Image src="/icons/home.svg" className="home-icon" alt="Home Icon" width={18} height={18} />Home</Link>
        <div className='separator'></div>
        <Link href="/portfolio" className='nav-link portfolio'>Portfolio</Link>
        <Link href="/hermien" className='nav-link hermien'>Hermien</Link>
        <Link href="/blog" className='nav-link blog'>Blog</Link>
        <Link href="/contact" className='contact'><Image src="/icons/envelope.svg" className="contact-icon" alt="Envelope Icon" width={18} height={18} />Contact</Link>
        <div className="menu-btn" role="button" onClick={toggleNavbar}>
          <div className={`menu-btn-icon ${expanded ? 'animate-menu-icon' : ''}`}></div>
        </div>
      </nav>
      <div className={`expanded-content ${expanded ? 'reveal-expanded' : ''}`}>
        <Link href="/portfolio" className="expanded-link"><Image src="/icons/briefcase.svg" className="expanded-link-icon" alt="Briefcase Icon" width={16} height={16} />Portfolio</Link>
        <Link href="/hermien" className="expanded-link"><Image src="/icons/arrow-trend-up.svg" className="expanded-link-icon" alt="Upwards Trend Arrow Icon" width={16} height={16} />Hermien</Link>
        <Link href="/blog" className="expanded-link"><Image src="/icons/feather.svg" className="expanded-link-icon" alt="Feather Icon" width={16} height={16} />Blog</Link>
        <Link href="/contact" className="expanded-link"><Image src="/icons/envelope.svg" className="expanded-link-icon" alt="Envelope Icon" width={16} height={16} />Contact</Link>
      </div>
    </>
  );
}

export default Navbar;