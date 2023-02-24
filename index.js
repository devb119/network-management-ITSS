const express = require("express");
const path = require("path");

const app = express();

app.use(require("express-status-monitor")());

app.get("/", function (req, res) {
  // res.send("Hello World from server!");
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
