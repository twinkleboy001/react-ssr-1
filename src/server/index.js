import express from "express";
import { render } from "./utils";

const app = express();
app.use(express.static("public"));

app.get("*", function (req, res) {
  res.send(render(req));
});

var server = app.listen(3000);
