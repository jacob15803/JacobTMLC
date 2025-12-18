const express = require("express"); // npm i express
const mongoose = require("mongoose"); 

const port = 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// Models
require("./models/Movie");

// Routes
require("./routes/movieRoutes")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});