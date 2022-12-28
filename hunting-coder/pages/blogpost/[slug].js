import React, {  useState } from 'react'
import blogPost from "../../styles/BlogPost.module.css";
// Step 1 : Find the file to the slug
// Step 2 : Populate them on page
const Slug = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
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

export async function getServerSideProps(context){
  let { slug } = context.query;
  let data= await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let allBlogs= await data.json();
  return {
    props: {allBlogs}
  }
}

export default Slug
