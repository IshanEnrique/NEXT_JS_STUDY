// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// http://localhost:3000/api/getblog?slug=how-to-learn-java
import * as fs from 'fs';



export default  function  handler(
  req,
  res
) {
    // let title=req.query.slug;
    // console.log("Slug : "+title)
    // let data = null;
    // //  await BlogSchema .find({title:title});
    // if (data) {
    //     res.status(200).json(JSON.parse(data));
    // }else{
    //     let error={
    //         status:"ERR0001",
    //         message:"No such blog found"
    //       }
    //       return res.status(500).json(error);
    // }
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err,data) => {
    if(err){
      let error={
        status:"ERR0001",
        message:"No such blog found"
      }
      return res.status(500).json(error);
    }
    console.log(typeof data );
    res.status(200).json(JSON.parse(data));
  });
}
