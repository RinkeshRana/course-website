import courses from "../../middleware/models/courses";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  let course = await courses.find();

  if (req.query.slug) {
    for (const item of course) {
      if (item.slug === req.query.slug) {
        course = item;
        break;
      }
    }
    return res.status(200).json(course);
  } else if (req.query.categoryId >= 0 && req.query.categoryId <= 2) {
    let courses = [];
    if (req.query.categoryId) {
      for (const item of course) {
        if (item.categoryId === req.query.categoryId) {
          courses.push(item);
        }
      }
      return res.status(200).json(courses);
    }
    return res.status(200).json(courses);
  } else if (req.query.search) {
    let courses = [];
    for (const item of course) {
      if (item.title.toLowerCase().includes(req.query.search.toLowerCase())) {
        courses.push({ title: item.title, slug: item.slug });
      }
    }
    return res.status(200).json(courses);
  } else {
    return res.status(200).json(course);
  }
};

export default connectDB(handler);
