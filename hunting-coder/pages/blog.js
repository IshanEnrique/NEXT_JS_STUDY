import React, { useEffect, useState } from 'react'
import styles from "styles/Home.module.css";
import blog from "styles/Blog.module.css";
import Link from 'next/link';
// Step 1 : Collect all the files from blogdata directory
// Step 2 : Iterate through them and Display

const Blog = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, [])

  return (
    <>

      <main className={`${styles.main} ${blog.blogBody}`}>

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>

          {
            blogs.map((item) => {
              return (
                <div className={styles.blogItem} key={item.slug}>
                  <Link href={`/blogpost/${item.slug}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.content.substr(0, 140)} <span className={blog.readMore}><Link href={`/blogpost/${item.slug}`}>
                 <br />
                  ... Read More
                  </Link></span></p>
                </div>
              )
            })
          }


        </div>
      </main>
    </>
  )
}

export default Blog
