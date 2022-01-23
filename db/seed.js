const Lead = require("../models/lead");

const seedData = require("./lead-seed.json");

Lead.deleteMany({})
  .then(() => Lead.insertMany(seedData))
  .then(console.log)
  .catch(console.error)
  .finally(() => process.exit());
