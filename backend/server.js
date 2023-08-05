const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const authRouter = require("./routes/authRouter");
app.use(express.json());
const cors = require("cors");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World again");
});

app.use(authRouter);
app.use(cors);
