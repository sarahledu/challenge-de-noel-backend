require("dotenv").config();
require("./config/dbConnection");

const express = require("express");
const cors = require("cors");

const server = express();
server.listen(process.env.PORT, () => {
  console.log("Listening on http://localhost:" + process.env.PORT);
});



server.use(cors(process.env.FRONT_URL));
server.use(express.json({ extended: true }));


const tshirtRouter = require("./routes/tshirts");
server.use(tshirtRouter);