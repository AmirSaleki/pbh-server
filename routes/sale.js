const router = require("express").Router();
const Sale = require("../models/Sale");

//register a new person
router.post("/addSale", async (req, res) => {
  const newSale = new Sale({
    weight: req.body.weight,
    buyer: req.body.buyer,
  });
  try {
    const sale = await newSale.save();
    res.status(201).json(sale);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update a sale
router.put("/:id", async (req, res) => {
  try {
    const updatedSale = await Sale.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSale);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a sale
router.get("/find/:id", async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    res.status(200).json(sale);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all sales

router.get("/", async (req, res) => {
  try {
    const sale = await Sale.find();
    res.status(200).json(sale.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
