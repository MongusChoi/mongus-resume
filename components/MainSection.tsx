import React from 'react';
import { Typography, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import theme from '../src/theme';

const MainSection: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div className="intro">
      <div className="profile-pic">
        <Image 
          src="/profile.jpeg" 
          alt="Profile Picture" 
          width={200} 
          height={200} 
          className="image" 
        />
      </div>
      <div className="intro-text">
        <Typography variant="h4" component="h1">Hello</Typography>
        <Typography variant="h5" component="h2">My name is MyeongSoo Choi</Typography>
        <Typography component="p">
          I&apos;m Backend Developer. <br />
          I usally use Node.js and MongoDB, MS Azure. <br />
          Thank you for visit my page.
        </Typography>
        <div className="buttons">
          <Link href="/resume" className="button resume">Resume</Link>
          <Link href="/projects" className="button projects">Projects</Link>
          <Link href="/contact" className="button contact">Contact</Link>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

export default MainSection; 