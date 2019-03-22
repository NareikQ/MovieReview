const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/movieReview")
  .then(() => console.log("Connected to mongoDb"))
  .catch(ex => console.log("Error: ", ex));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  cast: Array,
  genres: Array
});

const Movie = mongoose.model("movie", movieSchema);

async function createMovie() {
  const movie = new Movie({
    title: "Kieran Test",
    year: 2019,
    cast: ["Kieran Quinn", "Someone else"],
    genres: ["Action"]
  });

  const result = await movie.save();

  console.log("Result: ", result);
}

async function getMovies() {
  const movies = await Movie.find({ year: { $gt: 2016 } })
    .limit(5)
    .sort({ title: -1 })
    .select({ title: 1, year: 1 });

  console.log(movies);
}
getMovies();
//createMovie();
