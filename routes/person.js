const router = require("express").Router();
const { request } = require("http");
const Person = require("../models/Person");

// Create a new person
router.post("/register", async (req, res) => {
  const newPerson = new Person({
    name: req.body.name,
    balance: req.body.balance,
  });
  try {
    const person = await newPerson.save();
    res.status(201).json(person);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update a person
//localhost:8800/server/person/update/صنم بیرامی/
//body => {"balance":15000}
router.put("/update/:id", async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPerson);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a person
router.delete("/:id", async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.status(200).json("The person has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a person
router.get("/find/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all people

router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
