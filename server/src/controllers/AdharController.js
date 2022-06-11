const express = require("express");
const AdharDetail = require("../models/AdharModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const reqq = req.body;
    reqq.Adhar_Number = Math.floor(Math.random() * 1e12);
    const data = await AdharDetail.create(reqq);
    // console.log("data",data)
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const data = await AdharDetail.find().lean().exec();
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = await AdharDetail.findOne({ email: req.body.email });
    const pass = data.password === req.body.password;

    if (pass) {
      return res.send(data);
    }

    return res
      .status(400)
      .send({ message: "Please try another email or password" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
