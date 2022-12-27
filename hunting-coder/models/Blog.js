const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const BlogSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Blogs = mongoose.model("blogs", BlogSchema);
Blogs.createIndexes();
module.exports = mongoose.model.Blogs;