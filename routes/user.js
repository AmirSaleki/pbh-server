const router = require("express").Router();
const { request } = require("http");
const User = require("../models/User");

// Create a new user
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a user
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all users

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
