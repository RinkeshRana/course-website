import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContents = await fs.readFile("./json/courses.json", "utf8");
  let courses = JSON.parse(fileContents);
  let resultCourses = [];
  if (req.query.course) {
    for (const item of courses.data) {
      if (item.title.toLowerCase().includes(req.query.course.toLowerCase())) {
        resultCourses.push({ title: item.title, slug: item.slug });
      }
    }
    res.status(200).json(resultCourses);
    return;
  }
  res.status(500).json("not allowed");
  return;
}
