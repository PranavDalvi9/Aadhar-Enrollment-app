const express = require("express");
const Admin = require("../models/AdminModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const data = await Admin.create(req.body);
    // console.log("data",data)
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const data = await Admin.find().lean().exec();
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = await Admin.findOne(req.body);
    if (!data) {
      return res
        .status(400)
        .send({ message: "Please try another email or password" });
    }
    console.log("dataa", data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
