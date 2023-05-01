import connectDb from "@/mongo/mongoose";
import ContactSchema from "@/models/user";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { fname, lname, email, phone } = req.body;
    const newContact = new ContactSchema({
      fname,
      lname,
      email,
      phone,
    });

    try {
      await newContact.save();
      return res.status(201).json({ message: "Contact created successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Unable to create contact" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default connectDb(handler);

// import * as fs from 'fs'

// export default async function handler(req, res) {
//     if(req.method === 'POST'){
//         console.log(req.body)
//         let data = await fs.promises.readdir('contactdata');
//         console.log(data)
//         fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body))
//         res.status(200).json(req)
//     } else {
//         res.status(200).json(["thia ia get method."])
//     }

// }