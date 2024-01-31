'use client'
import styles from "../page.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SmallOutfitCard from '@/app/components/SmallOutfitCard';
import Outfits from '@/app/components/ClosetStorage';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.centerr}>
        <h1 className={styles.AppName}>Closet</h1>
          <div className={styles.MainClosetFrame}>
            {Outfits[1]}
          </div>
      </div>
    </main>
  );
}
