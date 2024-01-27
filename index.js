const express = require("express");
const cors = require("cors");
const authRouter = require("./src/routers/authRouter");
const connectDb = require("./src/configs/connectDb");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
require("dotenv").config();

const app = express();
const PORT = 3001;

// Config cors
app.use(cors());

// Config express json
app.use(express.json());

// Router
app.use("/auth", authRouter);

// Connect to db mongodb
connectDb();

// Handle middleware
app.use(errorMiddleware);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server starting at http://localhost:${PORT}`);
});
