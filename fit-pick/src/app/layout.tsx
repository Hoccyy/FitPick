
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './page.module.css';
import NavItem from './components/NavItem';
import Navbar from './components/Navbar';
import UploadButton from './components/UploadButton';
import { FirebaseApp, FirebaseAppSettings, initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut, Config } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { AuthContextProvider, UserAuth } from './context/AuthContext';


/*

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb07qS1E9NZdY8jaHUTICbjq2h7c1bI_E",
  authDomain: "fitpick-411706.firebaseapp.com",
  projectId: "fitpick-411706",
  storageBucket: "fitpick-411706.appspot.com",
  messagingSenderId: "10784791395",
  appId: "1:10784791395:web:0f6c81a2a06259b0121156",
  measurementId: "G-7RPGRCSX2Z"
};

const app : FirebaseApp = initializeApp(firebaseConfig);



let analytics; let firestore;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  firestore = getFirestore();
}


const provider : GoogleAuthProvider = new GoogleAuthProvider();

const auth = getAuth(app);
signInWithRedirect(auth, provider);

/*
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result!);
    const token = credential!.accessToken;

    // The signed-in user info.
    const user = result!.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log("Successss");
  }).catch((error) => {
    // Handle Errors here.
    console.log("ERRORRRRR 1313313");
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    console.log(email)
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


signOut(auth).then(() => {
  // Sign-out successful.
  console.log('signed out')
}).catch((error) => {
  // An error happened.
});

*/


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitPick | Seamless Outfits",
  description: "Need to decide on an outfit? Let FitPick choose for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  <head>
    <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
  </head>
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        <div className={styles.centerMenu}>
          <Navbar/>
          <nav id='menu' className={styles.menu}>
            <NavItem title='Main' path='/'/>
            <NavItem title='Closet' path='/closet'/>
          </nav>
          <nav id='menu' className={styles.uploadButton}>
            <div className={styles.uploadButtonContainer}>
              <UploadButton title='Upload' path='' linkExist={false}/>
            </div>
          </nav>
        </div>
        {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
