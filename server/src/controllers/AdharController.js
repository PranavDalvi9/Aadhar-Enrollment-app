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

module.exports = router;
