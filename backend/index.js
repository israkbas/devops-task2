const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://db:27017/devopsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const NameSchema = new mongoose.Schema({ name: String });
const NameModel = mongoose.model("Name", NameSchema);

app.post("/api/names", async (req, res) => {
  const { name } = req.body;
  const newName = new NameModel({ name });
  await newName.save();
  res.json({ message: "Name saved" });
});

app.get("/api/names", async (req, res) => {
  const names = await NameModel.find();
  res.json(names);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
