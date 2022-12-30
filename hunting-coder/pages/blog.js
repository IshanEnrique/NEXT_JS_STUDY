import React, { useEffect, useState } from 'react'
import styles from "styles/Home.module.css";
import blog from "styles/Blog.module.css";
import Link from 'next/link';
import InfiniteScroll from "react-infinite-scroll-component";
// Step 1 : Collect all the files from blogdata directory
// Step 2 : Iterate through them and Display

const Blog = () => {

  const [blogs, setBlogs] = useState([]);
  const [pageNo, setPageNo] = useState(2);
  // const [fetchSize, setFetchSize] = useState();
  const [completeRecordSize, setCompleteRecordSize] = useState(pageNo+2);
  let fetchData = async () => {
    console.log("Fetch more")
    let data = await fetch(`http://localhost:3000/api/blogs?pageNo=${pageNo+2}`);
    let dataBlogs = await data.json();
    setPageNo(pageNo+2);
    setBlogs(dataBlogs.allBlogs)
    setCompleteRecordSize(dataBlogs.completeRecordSize);
    console.log("page No  : "+pageNo+", Complete Record : "+dataBlogs.completeRecordSize+" , completeState : "+completeRecordSize);
   
    
  };
useEffect(() => {
  console.log("UseEffect ")
  return async () => {
    let data = await fetch(`http://localhost:3000/api/blogs?pageNo=${pageNo}`);
    let dataBlogs = await data.json();
    setBlogs(dataBlogs.allBlogs)
    setCompleteRecordSize(dataBlogs.allBlogs.length);
  };
}, [])
  return (
    <>

      <main className={`${styles.main} ${blog.blogBody}`}>

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>

          <InfiniteScroll
            dataLength={blogs.length} //This is important field to render the next data
            next={fetchData}
            hasMore={pageNo<=blogs.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            
            { blogs &&
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
          </InfiniteScroll>
          


        </div>
      </main>
    </>
  )
}

// SERVER SIDE RENDERING 
// export async function getServerSideProps(context) {

//   let data = await fetch(`http://localhost:3000/api/blogs`);
//   let allBlogs = await data.json();
//   console.log("First fetch record : "+ JSON.stringify(allBlogs));
//   return {
//     props: { allBlogs }
//   }
// }

export default Blog
