'use client';

import { motion } from 'framer-motion';
import styles from './Highlights.module.css';

const highlights = [
    { title: 'Product & Growth @ alt.f', icon: '📈' },
    { title: 'Founder @ WheyUp', icon: '🚀' },
    { title: 'Head of PR @ Enactus', icon: '🌍' },
    { title: 'Data Analyst @ BISAG-N', icon: '📊' },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Highlights() {
    return (
        <div className={styles.section}>
            <p className="sectionLabel">Highlights</p>
            <motion.div
                className={styles.pills}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-20px' }}
            >
                {highlights.map((h, i) => (
                    <motion.div key={i} className={styles.pill} variants={item}>
                        <span className={styles.icon}>{h.icon}</span>
                        <span className={styles.title}>{h.title}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
