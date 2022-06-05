const express = require("express");
const database = require("../../database/models/index");
const router = express.Router();

const getTodosController = async (req, res) => {
  let todos = await database.store.findAll();
  res.status(200).json(todos);
};

module.exports = router.get("/items", getTodosController);
