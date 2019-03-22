const express = require("express");
const app = express();
const cors = require('cors');
const movies = require("./routes/movies");
const port = 5000;

app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use('/api/movies', movies);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
