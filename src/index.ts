import express from "express";
import dotenv from "dotenv";

import restaurantRouter from "./routes/restaurant.router";
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/restaurants",restaurantRouter);
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});   