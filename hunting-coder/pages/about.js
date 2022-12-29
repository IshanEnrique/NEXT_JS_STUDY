import React,{ useEffect, useState } from "react";


async function createMarkup() {
  try {
    let rawData = await fetch("http://localhost:3000/api/getDynamicHtml?slug=about");
    if (rawData.status === 200) {
      let data = await rawData.json();
      return data && data.status === "00" ? {__html: data.data} : {__html : `<h1>${data.message}</h1>`};
    } else {
      let data = await rawData.json();
     
      return data && data.status !== "00" ? {__html: data.data}  : {__html :`<h1>${data.message}</h1>`};
    }
  } catch (error) {
    console.log(error)
    return  {__html : "<h1>No Html to show1</h1>"};
  }
}
const About = () => {

  const [content, setContent] = useState("<h1>No Html to show</h1>");
  useEffect( () => {
    return async ()=>{
      let htmlContent=await createMarkup();
      console.log(">>>>>>>>>>>>"+htmlContent.__html)
      setContent(htmlContent.__html)
    }
  }, [])


  return (
    <>
      {/* Dangerously set innerHtml to show html content */}
      <div dangerouslySetInnerHTML={ {__html:content}}></div>    </>
  )
}

export default About
