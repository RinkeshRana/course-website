const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      // maxlength: [50, "Title cannot be more than 50 characters"],
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
      // maxlength: [100, "Short description cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      // maxlength: [500, "Description cannot be more than 500 characters"],
    },
    learningPoints: [
      {
        type: String,
        required: true,
        trim: true,
        // maxlength: [100, "Learning points cannot be more than 100 characters"],
      },
    ],

    image: {
      type: String,
      required: true,
      trim: true,
    },
    downloadLink: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};

module.exports = mongoose.model("Courses", CoursesSchema);
