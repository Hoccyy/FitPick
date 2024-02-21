"use client"
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';


const NavItem = ({
    title = '',
    path = '',
    desc = '',
}) => {
  const {user} = UserAuth();

  if (!user) {
    return null;
  }

  return (
      <li id='menuItems'>
          <h3 id='navButtons' className={styles.listItemText}>
            <Link href={path} title={desc} passHref>
              {title}
            </Link>
          </h3>
      </li>
  );
};

export default NavItem;