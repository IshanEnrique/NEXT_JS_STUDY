import { v4 as uuid } from 'uuid';
import * as fs from 'fs';
// import contactDetails from '../../contact-data/contactDetails.json';

export default async function handler(req, res) {
    if (req.method === "POST") {
        let id = uuid();
        let {name,email,mobile,description,subject}=req.body;
        let contactData={
            id:id,
            name:name,
            email:email,
            mobile:mobile,
            subject:subject,
            description:description
        }
        let contactDetails= await  fs.promises.readFile('contactdata/contactDetails.json',"utf-8");
        contactDetails=JSON.parse(contactDetails);
        let contactDetailsArray= contactDetails.contactData;
        contactDetailsArray.push(contactData);
        contactDetails.contactData=contactDetailsArray;
      let saveStatus=  fs.promises.writeFile('contactdata/contactDetails.json',JSON.stringify(contactDetails));
      if(saveStatus){
        res.status(200).json({
            status:"00",
            message:"Thank you for catacting us. Our team will reach you soon."
        })
      }else{
        return res.status(500).json(
            {
                status: "ERR0001",
                message: " Your request can not be submitted due to internal server error."
            }
        )
      }

    } else {
        return res.status(405).json(
            {
                status: "ERR4001",
                message: req.method + " method not valid for this cantact submit operation."
            }
        )

    }
}