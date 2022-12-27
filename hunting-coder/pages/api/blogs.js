// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';



export default async function handler(
    req,
    res
) {

    let data = await fs.promises.readdir("blogdata");
    let myFile;
    let allBlogs = [];
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let slug=element.slice(0,element.lastIndexOf("."));
        myFile = await fs.promises.readFile(("blogdata/" + element), "utf-8");
        let jsonFile=JSON.parse(myFile);
        jsonFile.slug=slug;
        allBlogs.push(jsonFile);
    }
    res.status(200).json(allBlogs);
}
