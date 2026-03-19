'use client';

import { Linkedin, Twitter, Instagram, Download, PenTool, Mail } from 'lucide-react';
import SearchBox from './SearchBox';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.socials}>
                <a href="https://linkedin.com/in/venkateshgaur" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={16} />
                </a>
                <a href="https://twitter.com/venky_gg" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter size={16} />
                </a>
                <a href="mailto:venkateshgaur22@gmail.com" aria-label="Email">
                    <Mail size={16} />
                </a>
            </nav>

            <div className={styles.searchContainer}>
                <SearchBox />
            </div>

            <nav className={styles.actions}>
                <a href="/resume.pdf" download className={styles.action}>
                    <Download size={14} />
                    <span>DOWNLOAD CV</span>
                </a>
            </nav>
        </header>
    );
}
