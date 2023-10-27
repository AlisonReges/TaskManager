const express = require("express");
module.exports = (app) => {
  app.set("port", 3000);
  app.set("json spaces", 2);
  app.use(express.json());
  app.use(app.auth.initialize());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
};
