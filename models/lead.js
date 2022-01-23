const mongoose = require("../db/connection");

const LeadSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    weddingDate: { type: String, required: true },
    venueName: String,
    venueAddress: String,
    guestCount: { type: String, required: true },
    colorTheme: String,
    addNotes: String,
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", LeadSchema);

module.exports = Lead;
