const mongoose = require("mongoose");
const Movie = mongoose.model("movies");

module.exports = (app) => {
    app.post("/api/v1/movie/add", async (req, res) => {
    console.log("ADD NEW MOVIE");
    const { name, image, description } = req.body;

    try {
      const movie = await Movie.findOne({ name });

      if (movie) {
        return res.status(400).json({ message: "Movie already exists" });
      }

      movieFields = { name, description, image };
      const response = await Movie.create(movieFields);

      res.status(201).json({ message: "Movie added successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });
};