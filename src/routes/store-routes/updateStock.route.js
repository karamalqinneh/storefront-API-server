const express = require("express");
const database = require("../../database/models/index");
const router = express.Router();

const addItemController = async (req, res) => {
  let item = await database.store.findOne({
    where: { id: req.params.id },
  });
  if (req.body.action == "ADD") {
    item.set({
      stock: item.stock - 1,
    });
    item.save();
    res.status(200).json(item);
  } else {
    item.set({
      stock: item.stock + 1,
    });
    item.save();
    res.status(200).json(item);
  }
};

module.exports = router.put("/update-item/:id", addItemController);
