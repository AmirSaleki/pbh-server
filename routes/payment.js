const router = require("express").Router();
const Payment = require("../models/Payment");

//add a new payment
router.post("/addPayment", async (req, res) => {
  const newPayment = new Payment({
    payerName: req.body.payerName,
    payment: req.body.payment,
    desc: req.body.desc,
  });
  try {
    const payment = await newPayment.save();
    res.status(201).json(payment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update a payment
router.put("/:id", async (req, res) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a payment
router.get("/find/:id", async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all payments

router.get("/", async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
