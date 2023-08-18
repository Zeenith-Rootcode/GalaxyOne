require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const cors = require("cors");

const userRouter = require("./api/routes/userRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost/3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

// Define port variable
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
