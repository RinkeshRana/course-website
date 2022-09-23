import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const fileContents = await fs.readFile("./json/courses.json", "utf8");
  let courses = JSON.parse(fileContents);

  if (req.method === "POST") {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.learningPoints ||
      !req.body.image ||
      !req.body.downloadLink
    ) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const { title, description, learningPoints, image, downloadLink } =
      req.body;

    const slug = title.replace(/\s+/g, "-").toLowerCase();

    const course = {
      title,
      shortDescription: description.substring(0, 100),
      description,
      learningPoints,
      image,
      downloadLink,
      categoryId: "2",
      slug,
    };

    if (courses.data.find((c) => c.slug === slug)) {
      res.status(400).json({ message: "Course already exists" });
    }

    // validate length of title and description
    if (title.length < 5) {
      return res
        .status(400)
        .json({ message: "Title must be at least 5 characters long" });
    } else if (description.length < 20) {
      return res
        .status(400)
        .json({ message: "Description must be at least 20 characters long" });
    }

    // check downloadlink is valid without regex
    const regex = new RegExp(
      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
      "i"
    );
    if (!regex.test(downloadLink)) {
      res.status(400).json({ message: "Please enter a valid download link" });
    }

    // check image is valid
    try {
      var probe = require("probe-image-size");
      const { width, height } = await probe(image);
      console.log(probe(image));
      if (width < 700 || height < 720) {
        return res.status(400).json({
          message: "Image resolution should be at least 1280x720",
        });
      }
    } catch (err) {
      return res.status(400).json({
        message: "Please enter a valid image url",
      });
    }

    // pushing course to courses.json
    courses.data.push(course);
    await fs.writeFile(
      path.join(process.cwd(), "json", "courses.json"),
      JSON.stringify(courses)
    );
    res.status(201).json({ message: "Course added successfully" });
  }
  res.status(500).json({ message: "something went wrong" });

  return;
}
