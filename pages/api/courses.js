// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile("./pages/api/json/courses.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(200).json("error");
      return;
    } else {
      res.status(200).json(JSON.parse(data));
    }
    res.status(200).json(JSON.parse(data));
  });
}
