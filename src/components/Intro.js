import React from 'react';
import styles from '../styles/Intro.module.css';

// Intro component displays a brief introduction
function Intro() {
  return (
    <section id="intro" className={styles.intro}>
      <h1>Alejandro's Portfolio</h1>
      <p>Hi, my name is Alejandro Diaz. I am a Software Engineer specializing in iOS development, with experience in building high-quality mobile applications. My expertise in Swift and SwiftUI as the front-end, combined with a strong foundation in front-end technologies like React and JavaScript.</p>
      <p></p>
    </section>
  );
}

export default Intro;
