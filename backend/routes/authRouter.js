const { Router } = require("express");
const authControllers = require("../controllers/authControllers");

const router = Router();

router.post("/register", authControllers.register_post);
router.get("/blogs", authControllers.blogs_get);

module.exports = router;
