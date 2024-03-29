
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './page.module.css';
import NavItem from './components/NavItem';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UploadButton from './components/UploadButton';
import { AuthContextProvider } from './context/AuthContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitPick | Seamless Outfit Picker",
  description: "Need to decide on an outfit? Let FitPick choose for you! Store your closet seamlessly and make your choice easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  <head>
    <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js" async></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
    <style>
    @import url(&apos;https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap&apos;)
    @import url(&apos;https://fonts.googleapis.com/css2?family=PT+Mono&family=Roboto+Mono:wght@300&display=swap&apos;)
    </style>
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
        <Footer/>
        </AuthContextProvider>
      </body>
    </html>
  );
}
