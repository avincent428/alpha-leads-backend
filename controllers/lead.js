const express = require("express");
const Lead = require("../models/lead");

const LeadRouter = express.Router();

// read
LeadRouter.get("/", (req, res, next) => {
  Lead.find({})
    .then((books) => res.json(books))
    .catch(next);
});

// create
LeadRouter.post("/", (req, res, next) => {
  Lead.create(req.body)
    .then((lead) => res.json(lead))
    .catch(next);
});

// BookRouter.put('/:id', (req, res, next) => {
//     Book.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
//         // .then((book) => res.json(book))
//         .then(() => res.redirect("/books")) // both of these work
//         .catch(next)
// })

// delete
LeadRouter.delete("/:id", (req, res, next) => {
  Lead.findOneAndDelete({ _id: req.params.id }).then((lead) => res.json(lead));
});

module.exports = LeadRouter;
