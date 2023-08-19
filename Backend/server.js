require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const cors = require("cors");

connectDB();

// Importing Routes
const userRouter = require("./api/routes/userRoutes");
const planetRouter = require("./api/routes/planetRautes");
const packageRouter = require("./api/routes/packagesRoutes");
const ticketsRouter = require("./api/routes/ticketsRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost/3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Routes
app.use("/api/users", userRouter);
app.use("/api/planets", planetRouter);
app.use("/api/packages", packageRouter);
app.use("/api/tickets", ticketsRouter);

// Define port variable
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
