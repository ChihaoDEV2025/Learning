//init express
const express = require("express");
const app = express();

//init middleware

//init router
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello World",
  });
});
//init db

//exports

module.exports = app;
