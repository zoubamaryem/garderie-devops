const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/garderie", (req, res) => {
  res.json({
    nom: "Ma Garderie",
    description: "Bienvenue dans notre garderie"
  });
});

app.get("/api/services", (req, res) => {
  res.json([
    "Garde d'enfants",
    "Activités éducatives",
    "Repas équilibrés"
  ]);
});

app.get("/api/activites", (req, res) => {
  res.json([
    "Peinture",
    "Musique",
    "Jeux"
  ]);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});