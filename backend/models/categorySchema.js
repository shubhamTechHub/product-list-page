const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    category_img_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
