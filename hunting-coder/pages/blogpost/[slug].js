import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import blogPost from "../../styles/BlogPost.module.css";
// Step 1 : Find the file to the slug
// Step 2 : Populate them on page
const Slug = () => {
  const router = useRouter();
  let { slug } = router.query;
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    if(!router.isReady) return;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, [router.isReady])
  return (
    <div className={blogPost.conainer} >
      <main className={blogPost.main}>
        <h1>{blogs.title}</h1>
        <hr />
        <div>
          {blogs.content}
        </div>
      </main>
    </div>
  )
}

export default Slug
