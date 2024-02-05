import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './page.module.css';
import NavItem from './components/NavItem';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut } from "firebase/auth";


const dbkey = process.env.Wjdn34fehvbgrwjn2dh;


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  projectId: 'fitpick-411706',
  apiKey : dbkey,
  
};

const app : FirebaseApp = initializeApp(firebaseConfig);
const provider : GoogleAuthProvider = new GoogleAuthProvider();

const auth = getAuth(app);
signInWithRedirect(auth, provider);

getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result!);
    const token = credential!.accessToken;

    // The signed-in user info.
    const user = result!.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(1313);
  }).catch((error) => {
    // Handle Errors here.
    console.log(1313);
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
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




const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "FitPick | Seamless Outfits",
  description: "Need to decide on an outfit? Let FitPick choose for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <head>
    <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
  </head>
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.centerMenu}>
          <nav id='menu' className={styles.menu}>
            <NavItem title='Main' path='/'/>
            <NavItem title='Closet' path='/closet'/>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
