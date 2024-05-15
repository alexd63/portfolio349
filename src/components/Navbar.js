import React from 'react';
import styles from '../styles/Navbar.module.css';

// provides navigation links to different sections of the page
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#intro" className={styles.navLink}>Home</a></li>
        <li className={styles.navItem}><a href="#skills" className={styles.navLink}>Skills</a></li>
        <li className={styles.navItem}><a href="#projects" className={styles.navLink}>Projects</a></li>
        <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
