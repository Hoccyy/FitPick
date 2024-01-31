import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './page.module.css';
import NavItem from './components/NavItem';

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
