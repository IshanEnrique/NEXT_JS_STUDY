import React from 'react'
import styles from "styles/Home.module.css";
import blog from "styles/Blog.module.css";
import Link from 'next/link';
const Blog = () => {
  return (
    <>

      <main className={`${styles.main} ${blog.blogBody}`}>

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/Learn Javascript'}>
              <h3>How to learn javascript in 2022?</h3>
            </Link>
            <p>Javascript is the login used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/Learn Micro Services'}>
              <h3>How to learn microservices in 2022?</h3>
            </Link>
            <p>You can learn Micro Sevices in 2022</p>
          </div>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/Learn ReactJS'}>
              <h3>How to learn reactJS in 2022?</h3>
            </Link>
            <p>ReactJS makes application development easy fast and faster development process</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Blog
