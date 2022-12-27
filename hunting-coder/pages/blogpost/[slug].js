import React from 'react'
import { useRouter } from 'next/router'
import blogPost from "../../styles/BlogPost.module.css";
// Step 1 : Find the file to the slug
// Step 2 : Populate them on page
const Slug = () => {
  const router = useRouter();
  let { slug } = router.query;

  return (
    <div className={blogPost.conainer} >
      <main className={blogPost.main}>
        <h1>Title of the page - {slug}</h1>
        <hr />
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, illo officiis soluta voluptates iste fugiat! Quo fuga ab libero quam, magnam nulla eaque aliquid animi, similique facilis qui quibusdam laudantium.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At mollitia velit id repellat debitis corrupti explicabo! Quas quibusdam reiciendis facilis non eaque dolor nesciunt commodi nemo at! Adipisci, in doloribus!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eos labore corporis officiis dolore, voluptates minima corrupti doloremque et hic veniam nesciunt aliquid pariatur commodi saepe explicabo maiores sint atque!
        </div>
      </main>
    </div>
  )
}

export default Slug
