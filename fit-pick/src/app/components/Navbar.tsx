"use client";
import menuStyles from './menuStyles.module.css';
import { UserAuth } from '../context/AuthContext';
import RandomIndex from './RandomIndex';


const displayMessages : string[] = ['Start your catalog!', 'Create your closet', 'Store your closet'];
const messageChoice : number = RandomIndex(0, displayMessages.length);

const Navbar = () => {
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
  return (
    <div className={menuStyles.holder}>
      <div className={menuStyles.menuBg}>
        <h1 className={menuStyles.LogoutButton}>≡ </h1>
        <h1 className={menuStyles.Username}>{{user}.user?.displayName ? 'Hi, ' + {user}.user?.displayName + '!': '' + displayMessages[messageChoice]}</h1>
        <h1 className={menuStyles.LoginButton} onClick={handleSignIn}>Login</h1>
        <h1 className={menuStyles.SignupButton} onClick={handleSignIn}>Sign&nbsp;up</h1>
        <h1 className={menuStyles.LogoutButton} onClick={signOut}>Logout</h1>
      </div>
    </div>
  );
};

export default Navbar;