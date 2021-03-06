"use strict";

// Server Setup
const express = require("express");
const app = express();
const cors = require("cors");

// Routes & Dependencies
const authRoutes = require("./routes/auth-routes/index");
const storeRoutes = require("./routes/store-routes/index");
const errorHandler = require("./middleware/error-handlers/500");
const notFoundHandler = require("./middleware/error-handlers/404");

// Middlewares
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

// Routers

app.get("/", (req, res) => {
  res.status(200).send("server is up and running");
});
app.use(authRoutes);
app.use(storeRoutes);

// Error Handlers

app.use("*", notFoundHandler);
app.use(errorHandler);

// connect to sequelize & listen for requests
const start = (port) => {
  app.listen(port, () => console.log(`Running on Port ${port}`));
};

module.exports = {
  app: app,
  start: start,
};
