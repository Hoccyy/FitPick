"use client"
import React, { ChangeEvent } from 'react';
import styles from '../page.module.css'
import Link from 'next/link';

import { getStorage, ref, uploadBytes } from "firebase/storage";
import { auth, app } from '../../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UploadImage } from './UploadImage';



type Props = {
  title : string,
  path : string,
  desc : string,
  linkExist : boolean,
  user: any
};

const UploadButton = ({
    title = '',
    path = '',
    desc = '',
    linkExist = true,
    user = null
}) => {
  if (linkExist) {
  return (
      <li id='menuItems'>
          <h3 id='navButtons' className={styles.listItemText}>
            <Link href={path} title={desc} passHref>
              {title}
            </Link>
          </h3>
      </li>
  )};

  return (
      <li id='menuItems'>
          <h3 id='navButtons' className={styles.listItemText}>
            {/* TODO implement multiupload */}
            <input className={styles.uploadButtonMain} type="file" onChange={UploadImage}/>
          </h3>
      </li>
  )

};

export default UploadButton;