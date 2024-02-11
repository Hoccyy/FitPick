'use client'
import React, { useEffect, useState } from 'react';
import SmallOutfitCard from '@/app/components/SmallOutfitCard';
import { Key } from 'react';
import { FetchCloset } from '../components/FetchCloset';
import styles from "../page.module.css";

const App = () => {
  const [outfitList, setOutfitList] = useState<any[]>([]);

  useEffect(() => {
    FetchCloset()
      .then((list: any) => {
        setOutfitList(list);
      })
      .catch((error: any) => {
        console.error('Error fetching closet:', error);
      });
  }, []);

  // Render your components based on outfitList
  const outfitElements = outfitList.map((imageSource: string, index: Key | null | undefined) => (
    <SmallOutfitCard key={index} ImageSource={imageSource} />
  ));

  return (
    <main className={styles.main}>
            <div>
        <h1 className={styles.AppName}>Closet</h1>
      <div className={styles.MainClosetFrame}>
        {outfitElements}
      </div>
      </div>
    </main>
  );
};

export default App;
