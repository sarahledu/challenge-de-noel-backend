const express = require("express");
const router = new express.Router();
const tshirtModel = require("../models/tshirt");

router.get("/", (req, res) => {
  console.log("ici");
});

router.post("/create", (req, res) => {
  console.log("here", req.body);
  const newTshirt = {
    name: req.body.name,
    brand: req.body.brand,
    color: req.body.color,
    price: req.body.price,
    image: req.body.image,
    size: req.body.size,
    embroidery: req.body.embroidery,
    madeInFrance: req.body.madeIn
  };
  console.log("newTshirt is ", newTshirt);
  tshirtModel
    .create(newTshirt)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
});

router.get("/all-tshirts", (req, res) => {
  tshirtModel
    .find()
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => console.log(dbErr));
});

module.exports = router;
