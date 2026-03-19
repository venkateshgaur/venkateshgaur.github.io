import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Narrative from '@/components/Narrative';
import Highlights from '@/components/Highlights';
import Projects from '@/components/Projects';
import Interests from '@/components/Interests';
import CasesSidebar from '@/components/CasesSidebar';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <div className={styles.columns}>
          <div className={styles.left}>
            <Hero />
            <Narrative />
            <Highlights />
            <Projects />
            <Interests />
          </div>
          <div className={styles.right}>
            <CasesSidebar />
          </div>
        </div>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Venkatesh Gaur</p>
        </footer>
      </div>
    </main>
  );
}
