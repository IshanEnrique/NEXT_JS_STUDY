import React from 'react'
import styles from "styles/Home.module.css";

const HomeBlog = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coders</h1>
        <p className={styles.description}>A blog for hunting coders by a hunting coder</p>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is the login used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is the login used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is the login used to design logic for the web</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomeBlog
