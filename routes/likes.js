const config = require("config");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${config.get("mongodb.user")}:${config.get(
      "mongodb.password"
    )}@${config.get("mongodb.url")}?retryWrites=true`
  )
  .then(() => console.log("Connected to mongoDb"))
  .catch(ex => console.log("Error: ", ex));

const likeSchema = new mongoose.Schema({
  movie_id: String,
  user_id: String,
  date: Date
});
const Like = mongoose.model("like", likeSchema);

router.get("/", async (req, res) => {
  const likes = await Like.find()
    .limit(16)
    .select({ movie_id: 1, user_id: 1, date: 1 });

  res.send(likes);
});

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   if (!id) return res.status(400).send("Movie id not found");
//   const movies = await Movie.find({ _id: id })
//     .limit(5)
//     .sort({ title: -1 })
//     .select({ title: 1, year: 1, cast: 1, genres: 1, image: 1 });

//   if (movies.length === 0)
//     return res.status(404).send("The movie with the given ID was not found");
//   res.send(movies);
// });

router.post("/", async (req, res) => {
  let like = new Like({
    movie_id: req.body.movie_id,
    user_id: req.body.user_id,
    date: new Date
  });

  like = await like.save();

  res.send(like);
});

// router.put("/:id", async (req, res) => {
//   const movie = await Movie.findOneAndUpdate(
//     req.params.id,
//     {
//       title: req.body.title,
//       year: req.body.year,
//       cast: req.body.cast,
//       genres: req.body.genres
//     },
//     { new: true }
//   );

//   if (!movie) res.status(404).send("The movie with the given ID was not found");
//   res.send(movie);
// });

module.exports = router;
