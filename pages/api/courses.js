// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "json");

  fs.readFile(
    jsonDirectory + "./pages/api/json/courses.json",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        res.status(200).json("error");
        return;
      } else {
        let coursesData = JSON.parse(data);
        let courses = [];
        if (req.query.categoryId) {
          for (const item of coursesData.data) {
            if (item.categoryId === req.query.categoryId) {
              courses.push(item);
            }
          }
        } else {
          courses = coursesData;
        }
        res.status(200).json(courses);
        return;
      }
    }
  );
}
