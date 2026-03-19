'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <motion.div
            className={styles.hero}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.avatar}>
                <img src="/profile.jpg" alt="Venkatesh Gaur" />
            </div>
            <div>
                <h1 className={styles.name}>Venkatesh Gaur</h1>
                <p className={styles.subtitle}>PRODUCT & GROWTH ENTHUSIAST</p>
            </div>
        </motion.div>
    );
}
