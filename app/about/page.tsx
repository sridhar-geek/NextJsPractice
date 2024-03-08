import React from 'react'

import styles from './styles.module.css'
import Link from 'next/link'

const About = () => {
  return (
    <div className={styles.main}>
      <h1>Welcome to AboutPage</h1>
      <Link href="/">Link to Home Page</Link>
    </div>
  );
}

export default About