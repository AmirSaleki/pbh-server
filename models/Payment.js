const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    payerName: { type: String, required: true },
    payment: { type: Number, required: true },
    desc: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
