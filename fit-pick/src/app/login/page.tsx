'use client'
import React, { useEffect, useState } from 'react';
import { FetchCloset } from '../components/FetchCloset';
import styles from "../page.module.css";
import { UserAuth } from '../context/AuthContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const App = () => {
  const [outfitList, setOutfitList] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const router = useRouter();

  const {user, googleSignIn, logOut} = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error: any) {
        console.log(error.message);
    }
  }

  useEffect(() => {
    if (user) {
      router.push('/'); // Redirect to success page if user is signed in
    }
  }, [user, router]);
  
  return (
    <main className={styles.main}>
      <div className={styles.loginMain}>
        <h1 className={styles.joinMessage}>Join FitPick today! 🤩</h1>
        <div className={`${styles.MainClodsetFrame} ${loaded ? styles.fadeIn : ''}`}>
          <Image
            src={'/favicon.ico'}
            width={5013}
            height={5013}
            alt={'Your amazing outfit'}
            className={styles.AppLogo}
            id={'SmallCardImage'}
            loading='eager'
            />
        </div>
          <div className={`${styles.buttonsFrame} ${loaded ? styles.fadeIn : ''}`}>
          <h1 className={styles.signupMessage}>Login or signup with Google</h1>
            <button className={styles.LoginButton} onClick={handleSignIn} title='Login with Google'>Login</button>
            <button className={styles.SignupButton} onClick={handleSignIn} title='Signup with Google'>Sign&nbsp;up</button>
          </div>
      </div>
    </main>
  );
};

export default App;
