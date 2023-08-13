import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "src" });
});

app.get("/load-content", (req, res) => {
  res.send(
    "<p>This content was loaded dynamically using htmx and Express.js!</p>"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
