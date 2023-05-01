// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default async function handler(req, res) {
  
  try {
    let data = await fs.promises.readdir("blogdata");                        //read the no. of files from folder
    let allblogs = [];                                                       //assign an empty array which can be used to parse data
    for (let index = 0; index < data.length; index++) {                      //assign loop for items in folder
      const item = data[index];                                              //assign item in which total items according to loop pass
      let myfile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");  //read files
      let parsedJson = JSON.parse(myfile);                                   // var for parsing json
      allblogs.push(parsedJson);                                             // parse all readable files in empty array
    }
    console.log("allblogs:", allblogs);
    res.status(200).json(allblogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
    
