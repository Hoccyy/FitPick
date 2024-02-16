'use client'
import React, { useEffect, useState } from 'react';
import SmallOutfitCard from '@/app/components/SmallOutfitCard';
import { FetchCloset } from '../components/FetchCloset';
import styles from "../page.module.css";

const App = () => {
  const [outfitList, setOutfitList] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    FetchCloset()
      .then((list: string[]) => {
        setOutfitList(list);
      })
      .catch((error: any) => {
        console.error('Error fetching closet:', error);
      });
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll('.outfit-image');
    const imageLoadPromises = Array.from(images).map(image =>
      new Promise(resolve => {
        if (image.complete) {
          resolve;
        } else {
          image.addEventListener('load', resolve);
        }
      })
    );
    Promise.all(imageLoadPromises).then(() => {
      setLoaded(true);
    });
  }, [outfitList]);

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.AppName}>Closet</h1>
        <div className={`${styles.MainClosetFrame} ${loaded ? styles.fadeIn : ''}`}>
          {outfitList.map((imageSource: string, index: number) => (
            <SmallOutfitCard key={index} ImageSource={imageSource} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
