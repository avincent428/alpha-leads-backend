const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 8000);

app.use(express.urlencoded({ extended: true }));

// const bookController = require('./controllers/book')
// app.use('/books', bookController)

const leadController = require("./controllers/lead");
app.use("/", leadController);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});
