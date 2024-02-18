"use client";
import { UserAuth } from '../context/AuthContext';


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
    } catch (error: any) {
        console.log(error.message);
    }
  }
    return (
        <div >
          <div >
              <h1 >≡ </h1>
              <h1 >{{user}.user?.displayName}</h1>
              <h1 >{{user}.user?.displayName ? 'Hi ' + {user}.user?.displayName : 'Start your catalog!'}</h1>
              <h1 onClick={handleSignIn}>Login</h1>
              <h1 onClick={handleSignIn}>Sign&nbsp;up</h1>
              <h1 onClick={signOut}>Logout</h1>
          </div>
        </div>
    );
};

export default Navbar;