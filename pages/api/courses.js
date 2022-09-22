// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  let coursesData = JSON.parse(fileContents);
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
