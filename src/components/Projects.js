'use client';

import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'WheyUp',
        description: 'Integrated wellness platform combining workout tracking and meal planning.',
        status: 'Active',
        link: '#',
    },
    {
        title: 'alt.f Coworking',
        description: 'Product & Growth Intern. Built customer pipelines and drove B2B revenue growth.',
        status: 'Active',
        link: '#',
    },
    {
        title: 'LastBite (Enactus)',
        description: 'Co-founded food redistribution platform reducing food waste by 70%.',
        status: 'Active',
        link: '#',
    },
    {
        title: 'Lightweight KYC App',
        description: 'Vernacular, offline-compatible KYC product design for rural regions.',
        status: 'Past',
        link: '#',
    },
    {
        title: 'SmartCart',
        description: 'Consumer insight study revealing price-sensitive shopper behaviors.',
        status: 'Past',
        link: '#',
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
    return (
        <div className={styles.section}>
            <p className="sectionLabel">Projects & Experience</p>
            <motion.div
                className={styles.grid}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-20px' }}
            >
                {projects.map((p, i) => (
                    <motion.a
                        key={i}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                        variants={item}
                    >
                        <div className={styles.header}>
                            <h3 className={styles.title}>{p.title}</h3>
                            <span className={`${styles.badge} ${p.status === 'Active' ? styles.active : styles.past}`}>
                                {p.status}
                            </span>
                        </div>
                        <p className={styles.description}>{p.description}</p>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}
