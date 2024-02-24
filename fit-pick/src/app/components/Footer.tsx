"use client"
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';

const GitHubProfile : string = 'https://github.com/hoccyy';

const Footer = ({
    title = '',
    path = '',
    active = false
}) => {

    return (
        <main>
          <div className={styles.centerFtr}>
            <div className={styles.footerContainer}>
              <h1>
                FitPick 2024 ©&nbsp;&nbsp;<Link href={GitHubProfile} className={styles.footerHighlight} target='_blank'>&nbsp;&nbsp;• &nbsp;&nbsp;&nbsp;@Hoccyy¹³</Link>
                &nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Beta Version
              </h1>
              
            </div>
        </div>
        </main>
        
    );
};

export default Footer;