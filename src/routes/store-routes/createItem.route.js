const express = require("express");
const database = require("../../database/models/index");
const router = express.Router();

const addItemController = async (req, res) => {
  let body = req.body;
  let createdItem = await database.store.create({
    ...body,
  });
  if (createdItem) {
    res.status(200).send("added");
  } else {
    res.status(500).send(`the item can not be created`);
  }
};

module.exports = router.post("/create-item", addItemController);
