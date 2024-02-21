"use client";
import menuStyles from './menuStyles.module.css';
import { UserAuth } from '../context/AuthContext';
import RandomIndex from './RandomIndex';
import { useEffect, useState } from 'react';
import { FetchCloset } from './FetchCloset';


const displayMessages : string[] = ['Start your catalog!', 'Create your closet', 'Store your closet'];
const messageChoice : number = RandomIndex(0, displayMessages.length);

const Navbar = () => {
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
        if (image == null) {
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


  // Username and profile info
  const {user, googleSignIn, logOut} = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error: any) {
        console.log(error.message);
    }
  }

  const signOut = async () => {
    try {
        await logOut();
        window.location.reload();
    } catch (error: any) {
        console.log(error.message);
    }
  }
  if (!user) {
    return null
  }
  const outfitCountMessages : string[] = [
    'You currently have ' + (outfitList.length) + ' Amazing outfits!',
    (outfitList.length) + ' outfits and counting! 🤩',
    (outfitList.length) + ' jawdropping outfits!',
    (outfitList.length) + ' show stopping outfits!',
  ];
  const outfitCount = 'You currently have ' + (outfitList.length) + ' Amazing outfits!';

  return (
    <div id='navbar' className={menuStyles.holder}>
      <div className={menuStyles.menuBg}>
        <h1 className={menuStyles.LogoutButton}>≡ </h1>
        <h1 className={menuStyles.Username}>{{user}.user?.displayName ? 'Hi, ' + {user}.user?.displayName + '!': '' + displayMessages[messageChoice]}</h1>
        <h1 className={menuStyles.Username} title={outfitCountMessages[RandomIndex(0, outfitCountMessages.length)]}>{(outfitList.length)} Outfits</h1>
        <h1 className={menuStyles.LogoutButton} onClick={signOut}>Logout</h1>
      </div>
    </div>
  );
};

export default Navbar;