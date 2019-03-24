const express = require("express");
const app = express();
const cors = require('cors');
const movies = require("./routes/movies");
const likes = require("./routes/likes");
const port = 5000;

app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use('/api/movies', movies);
app.use('/api/likes', likes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
