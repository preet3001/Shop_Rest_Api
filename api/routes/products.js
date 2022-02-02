const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/product");

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
  /* if (id == "special") {
    res.status(201).json({
      id: "this was special id",
      message: "product was patched",
    });
  } else {
    res.status(201).json({
      message: "product was patched",
    });
  } */
});

router.get("/:productId", (req, res, next) => {
  var id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "No valid entry found for provided ID",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  /* if (id == "special") {
    res.status(200).json({
      id: "this was special id",
      message: "product was fetched",
    });
  } else {
    res.status(201).json({
      message: "product was fetched",
      id: id,
    });
  } */
});
router.post("/", (req, res, next) => {
    Product.init();
  const product = new Product(req.body);

  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST request to /product",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
  /* 
  res.status(201).json({
    message: "products were created",
    product: product,
  }); */
});
router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  /* res.status(200).json({
    message: "products were deleted",
    id: id,
  }); */
});

module.exports = router;
