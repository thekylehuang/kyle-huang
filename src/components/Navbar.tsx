"use client"

import './Navbar.css'
import Link from 'next/link'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase, faFeather, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Navbar = () => {
  const [expanded, toggleExpanded] = useState(false);

  const toggleNavbar = () => {
    toggleExpanded((prevState) => !prevState);
  };
  return (
    <>
      <nav className={expanded ? 'expanded' : ''}>
        <Link href="/" className='nav-link home'><Image src="/icons/home.svg" className='home-icon' alt="Home Icon" width={18} height={18} />Home</Link>
        <div className='separator'></div>
        <Link href="/portfolio" className='nav-link portfolio'>Portfolio</Link>
        <Link href="/hermien" className='nav-link hermien'>Hermien</Link>
        <Link href="/blog" className='nav-link blog'>Blog</Link>
        <Link href="/contact" className='contact'><Image src="/icons/envelope.svg" className='contact-icon' alt="Envelope Icon" width={18} height={18} />Contact</Link>
        <div className="menu-btn" role="button" onClick={toggleNavbar}>
          <div className={`menu-btn-icon ${expanded ? 'animate-menu-icon' : ''}`}></div>
        </div>
      </nav>
      <div className={`expanded-content ${expanded ? 'reveal-expanded' : ''}`}>
        <Link href="/portfolio" className="expanded-link"><FontAwesomeIcon icon={faBriefcase} className="expanded-link-icon" />Portfolio</Link>
        <Link href="/hermien" className="expanded-link"><FontAwesomeIcon icon={faArrowTrendUp} className="expanded-link-icon" />Hermien</Link>
        <Link href="/blog" className="expanded-link"><FontAwesomeIcon icon={faFeather} className="expanded-link-icon" />Blog</Link>
        <Link href="/contact" className="expanded-link"><FontAwesomeIcon icon={faEnvelope} className="expanded-link-icon" />Contact</Link>
      </div>
    </>
  );
}

export default Navbar;