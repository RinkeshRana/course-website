// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile("./pages/api/json/courses.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(200).json("error");
      return;
    } else {
      let courses = JSON.parse(data);
      if (req.query.slug) {
        for (const item of courses.data) {
          if (item.slug === req.query.slug) {
            res.status(200).json(item);
            return;
          }
        }
      }
      res.status(200).json(JSON.parse(data));
      return;
    }
  });
}
