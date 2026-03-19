'use client';

import { motion } from 'framer-motion';
import { Book, Headphones } from 'lucide-react';
import styles from './Interests.module.css';

export default function Interests() {
    return (
        <div className={styles.section}>
            <p className="sectionLabel">Interests</p>
            <div className={styles.grid}>
                <motion.a
                    href="https://venkateshgaur.medium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Book className={styles.icon} size={20} />
                    <div>
                        <p className={styles.label}>Reading & Writing</p>
                        <p className={styles.value}>Medium</p>
                    </div>
                </motion.a>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <Headphones className={styles.icon} size={20} />
                    <div>
                        <p className={styles.label}>Listening</p>
                        <p className={styles.value}>Spotify (Not Playing)</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
