const express = require("express");
const postsController = require("../controllers/post.controllers");

const router = express.Router();

router.post("/", postsController.save);
router.get("/:id", postsController.show);
router.get("/", postsController.index);
router.patch("/:id", postsController.update);
router.delete("/:id/:user_id", postsController.destroy);


module.exports = router;