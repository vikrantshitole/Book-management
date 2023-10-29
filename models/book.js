const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    minLength: 50
  },
  author: {
    type: String,
    required: true,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
  },
});

const User = model("book", BookSchema);

module.exports = User;