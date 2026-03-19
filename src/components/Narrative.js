'use client';

import { motion } from 'framer-motion';
import styles from './Narrative.module.css';

const section = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Narrative() {
    return (
        <div className={styles.narrative}>
            {/* ─── ABOUT ─── */}
            <motion.div
                variants={section}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-30px' }}
            >
                <p className={styles.body}>
                    I&apos;m Venkatesh Gaur. I build things for people — products, communities, and ideas
                    that try to make a dent. I run at the intersection of{' '}
                    <span className="highlight">technology</span>,{' '}
                    <span className="highlight highlightYellow">education</span>, and{' '}
                    <span className="highlight highlightBlue">entrepreneurship</span>.
                    I&apos;ve been obsessed with computers since I was a kid — the kind of obsession
                    that starts with taking apart your family&apos;s desktop and never really stops.
                </p>
            </motion.div>
        </div>
    );
}
