const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Person", PersonSchema);
