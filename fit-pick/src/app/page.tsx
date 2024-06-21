'use client';
import styles from "./page.module.css";
import 'react-tabs/style/react-tabs.css';
import PickedOutfitCard from './components/PickedOutfitCard';
import RandomIndex from './components/RandomIndex';
import FetchCloset from './components/ClosetStorage';
import { useState, useEffect, Key } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserAuth } from './context/AuthContext';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';


var defaultOutfit = './default.webp';


export default function Home() {
  const [outfitList, setOutfitList] = useState<any[]>([]);

  useEffect(() => {
    FetchCloset()
      .then((list: any) => {
        setOutfitList(list);
        console.log(list);
      })
      .catch((error: any) => {
        console.error('Error fetching closet:', error);
      });
  }, []);
  
  // Render your components based on outfitList
  console.log(outfitList[0])

  const chosenOutfit = outfitList[0] ? (
    <PickedOutfitCard key={0} ImageSource={outfitList[0][RandomIndex(0, outfitList[0].length)]} />
  ) : null;
  

  // Username and profile info
  const { user } = UserAuth();

  /*
  alert({user}.user?.uid);
  if (user !== null) {
    user.providerData.forEach((profile : any) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }  */

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // Each user's storage
      //console.log((user.uid + user.displayName).replaceAll(' ', ''));
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  
  
  useEffect(() => {
    if (!user) {
      window.location.href = '/login';
    }
  }, []);
  if (!user) {
    return null;
  }

  return (
    <main className={styles.main}>
      <div className={styles.centerr}>
        <h1 className={styles.AppName}>Click for a choice</h1>
          {chosenOutfit}
      </div>
    </main>
  );
}
