const express = require("express");
const { Color, data } = require("./db/db");
const path = require("path");
const app = express();
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/api/color", async (req, res, next) => {
  try {
    res.send(await Color.findAll());
  } catch (ex) {
    next(ex);
  }
});

app.post("/api/color", async (req, res, next) => {
  try {
    res.status(201).send(await Color.generateRandom());
  } catch (ex) {
    next(ex);
  }
});

const start = async () => {
  try {
    await data();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`server listening at PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
