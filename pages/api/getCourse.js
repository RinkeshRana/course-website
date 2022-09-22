import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContents = await fs.readFile("./json/courses.json", "utf8");
  let courses = JSON.parse(fileContents);
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
