import React from 'react';
import styles from '../styles/Contact.module.css';

//displays contact information and a LinkedIn link
function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Email: ajdiaz58@gmail.com</p>
      <a href="https://www.linkedin.com/in/alejandro-diaz-5ab828248" target="_blank">LinkedIn</a>
    </section>
  );
}

export default Contact;
