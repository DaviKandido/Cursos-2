const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");

app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

module.exports = app
