const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    weight: { type: Number, required: true },
    buyer: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sale", SaleSchema);
