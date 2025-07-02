const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); 


const postsRouter = require("./routes/posts");

app.use("/posts", postsRouter);

module.exports = app