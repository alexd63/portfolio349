import React from 'react';
import styles from '../styles/Skills.module.css'; 


function Skills() {
  return (
    <section id="skills" className={styles.skillsSpace}>
      <h2>Skills</h2>
      <div className={styles.stars}>
        <div className={styles.skill}>JavaScript</div>
        <div className={styles.skill}>React</div>
        <div className={styles.skill}>Node.js</div>
        <div className={styles.skill}>Swift</div>
        <div className={styles.skill}>Objective-C</div>
      </div>
    </section>
  );
}

export default Skills;
