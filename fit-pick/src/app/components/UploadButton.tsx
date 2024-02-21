"use client"
import React from 'react';
import styles from '../page.module.css'
import Link from 'next/link';
import { UploadImage } from './UploadImage';
import { UserAuth } from '../context/AuthContext';


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

}) => {
  const {user} = UserAuth();
  if (!user) {
    return null;
  }
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
            {/* TODO: implement multiupload */}
            <input className={styles.uploadButtonMain} type="file" onChange={UploadImage}/>
          </h3>
      </li>
  )

};

export default UploadButton;