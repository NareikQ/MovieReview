const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const config = require('../config/config');

mongoose
  .connect(`mongodb+srv://${config.mongo.user}:${config.mongo.password}@${config.mongo.url}?retryWrites=true`)
  .then(() => console.log("Connected to mongoDb"))
  .catch(ex => console.log("Error: ", ex));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  cast: Array,
  genres: Array
});
const Movie = mongoose.model("movie", movieSchema);

router.get("/", async (req, res) => {
  console.log("Here1");
  const movies = await Movie.find({ year: { $gt: 2016 } })
    .limit(5)
    .sort({ title: -1 })
    .select({ title: 1, year: 1 });

  res.send(movies);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Here2: ", id);
  if (!id) return res.status(400).send("Movie id not found");
  const movies = await Movie.find({ _id: id })
    .limit(5)
    .sort({ title: -1 })
    .select({ title: 1, year: 1 });

  if (movies.length === 0)
    return res.status(404).send("The movie with the given ID was not found");
  res.send(movies);
});

router.post("/", async (req, res) => {
  let movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    cast: req.body.cast,
    genres: req.body.genres
  });

  movie = await movie.save();

  res.send(movie);
});

router.put("/:id", async (req, res) => {
  const movie = await Movie.findOneAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      year: req.body.year,
      cast: req.body.cast,
      genres: req.body.genres
    },
    { new: true }
  );

  if (!movie) res.status(404).send("The movie with the given ID was not found");
  res.send(movie);
});

module.exports = router;
