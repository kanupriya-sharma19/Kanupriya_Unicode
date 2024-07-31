const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("app is running on ", port);
});

const charUrl = "https://hp-api.onrender.com/api/characters";
app.get("/characters", async function fetchData(req, res) {
  try {
    const response = await axios.get(charUrl);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Error occured:", error);
  }
});

const spellurl = "https://hp-api.onrender.com/api/spells";
app.get("/spells", async function fetchData(req, res) {
  try {
    const response = await axios.get(spellurl);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Error occured:", error);
  }
});

const hogwartStaff = "https://hp-api.onrender.com/api/characters/staff";
app.get("/characters/staff", async function fetchData(req, res) {
  try {
    const response = await axios.get(hogwartStaff);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Error occured:", error);
  }
});

const hogwartStud = "https://hp-api.onrender.com/api/characters/students";
app.get("/characters/students", async function fetchData(req, res) {
  try {
    const response = await axios.get(hogwartStud);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Error occured:", error);
  }
});

const charBaseUrl = "https://hp-api.onrender.com/api/character";
app.get("/character/:characterId", async (req, res) => {
  const id = req.params.characterId;
  try {
    const response = await axios.get(`${charBaseUrl}/${id}`);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Error occured:", error);
  }
});
