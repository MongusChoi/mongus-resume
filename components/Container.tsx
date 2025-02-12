import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/App.css';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <Link href="/" className="logo-link">
            <span className="dot"></span>
            <span className="logo-text">MyeongSoo Choi</span>
          </Link>
        </div>
        <nav className="nav">
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-item">
            <span className="footer-item-title">Phone</span>
            <span className="footer-item-content">010-8754-5027</span>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Email</span>
            <span className="footer-item-content">mongus.c@gmail.com</span>
          </div>
          <div className="footer-item">
            <span className="footer-item-title">Follow Me</span>
            <span>
              <a href="https://www.linkedin.com/in/myeongsoo-choi-4b939b138">
                <Image 
                  src="/linkedin.avif"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="footer-icon-img"
                  loading="lazy"
                />
              </a>
              <a href="https://github.com/MongusChoi">
                <Image 
                  src="/github.png"
                  alt="Github"
                  width={24}
                  height={24}
                  className="footer-icon-img"
                  loading="lazy"
                />
              </a>
            </span>
          </div>
          <div className="footer-item">
            <p className="copyright">
              &copy; 2025 By MyeongSoo Choi.<br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Container; 