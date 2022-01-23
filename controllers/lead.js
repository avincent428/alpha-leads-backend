const express = require("express");
const Lead = require("../models/lead");

const LeadRouter = express.Router();

LeadRouter.get("/", (req, res, next) => {
  Lead.find({})
    .then((books) => res.json(books))
    .catch(next);
});

module.exports = LeadRouter;
