import Courses from "../../models/Courses";
import connectDB from "../../lib/mongoose";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) res.send({ error: "You must be signed." });

  if (req.method != "POST") {
    return res.status(500).json({ message: "Something went wrong" });
  }
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.learningPoints ||
    !req.body.image ||
    !req.body.downloadLink
  ) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const { title, description, learningPoints, image, downloadLink } = req.body;

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

  if (title.length < 5) {
    return res
      .status(400)
      .json({ message: "Title must be at least 5 characters long" });
  } else if (description.length < 20) {
    return res
      .status(400)
      .json({ message: "Description must be at least 20 characters long" });
  }

  try {
    var probe = require("probe-image-size");
    const { width, height } = await probe(image);
    console.log(image, width, height);

    if (height >= width) {
      return res.status(400).json({
        message: "Image should portrait ",
      });
    }
  } catch (err) {
    return res.status(400).json({
      message: "Please enter a valid image url",
    });
  }
  try {
    const newCourse = await Courses.create(course);
    res.status(201).json(newCourse);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: "Course already exists" });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  }
};

export default connectDB(handler);
