// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// http://localhost:3000/api/getblog?slug=how-to-learn-java
import * as fs from 'fs';




export default  function  handler(
  req,
  res
) {
  fs.readFile(`htmls/${req.query.slug}.html`, "utf-8", (err,data) => {
    if(err){
      let error={
        status:"ERR0001",
        message:"No such html found"
      }
      return res.status(500).json(error);
    }
        
    res.status(200).json({
      status:"00",
      message:"File read completed.",
      data:data
    });
  });
}
