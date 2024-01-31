'use client'
import styles from "./page.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PickedOutfitCard from './components/PickedOutfitCard';
import RandomIndex from './components/RandomIndex';
import Outfits from './components/ClosetStorage';

var currOutfit = Outfits[0][RandomIndex(0,Outfits[0].length)];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.centerr}>
        <h1 className={styles.AppName}>FitPick</h1>
        <PickedOutfitCard ImageSource={currOutfit}
        />
      </div>
    </main>
  );
}
