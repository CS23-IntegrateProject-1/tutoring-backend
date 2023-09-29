import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send("Hello World!");
  }, 2000);
});
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});