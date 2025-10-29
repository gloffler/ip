import express from "express";
const app = express();

app.set("trust proxy", true);

app.get("/", (req, res) => {
  const ip =
    (req.headers["x-forwarded-for"] || "").split(",").shift().trim() ||
    req.socket.remoteAddress;
  res.json({ ip });
});

app.listen(3000, () => console.log("Server started on port 3000"));
