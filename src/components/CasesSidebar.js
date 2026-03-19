'use client';

import { motion } from 'framer-motion';
import styles from './CasesSidebar.module.css';

const cases = [
    {
        title: 'HealthyFy OS',
        date: '2024',
        tag: 'WIP',
        color: '#EC4899',
        icon: '🏥',
    },
    {
        title: 'Lightweight KYC App',
        date: '2025',
        tag: 'PRODUCT',
        color: '#6366F1',
        icon: '📱',
    },
    {
        title: 'WheyUp',
        date: '2024',
        tag: 'FOUNDER',
        color: '#F97316',
        icon: '🚀',
    },
    {
        title: 'FormFix — Smart Forms',
        date: '2024',
        tag: 'WIP',
        color: '#8B5CF6',
        icon: '📝',
    },
    {
        title: 'Enactus Social Impact',
        date: '2022',
        tag: 'NGO',
        color: '#10B981',
        icon: '🌍',
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

const item = {
    hidden: { opacity: 0, x: 12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function CasesSidebar() {
    return (
        <aside className={styles.sidebar}>
            <p className="sectionLabel">Cases</p>
            <motion.ul
                className={styles.list}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-30px' }}
            >
                {cases.map((c) => (
                    <motion.li key={c.title} className={styles.item} variants={item}>
                        <div
                            className={styles.icon}
                            style={{ background: c.color }}
                        >
                            <span className={styles.iconEmoji}>{c.icon}</span>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.title}>{c.title}</p>
                            <div className={styles.meta}>
                                <span className={styles.date}>{c.date}</span>
                                <span className={styles.dot}>•</span>
                                <span className={styles.tag}>{c.tag}</span>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
            <a href="#" className={styles.allLink}>ALL</a>
        </aside>
    );
}
