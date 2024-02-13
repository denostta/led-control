import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/led", cors());

app.use(express.static("public"));

let ledStatus = false;
app.get("/api/led", (req, res) => {
  res.json({ ledStatus });
});

app.post("/api/led", (req, res) => {
  ledStatus = req.body.ledStatus === "true";
  console.log(ledStatus);
  res.sendStatus(200).json({ status: "ok" });
  console.log("toggleClicked");
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
