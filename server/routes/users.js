var express = require("express");
var router = express.Router();
const UsersController = require("../app/modules/users/UsersController");

/* GET users listing. */
router.get("/", UsersController.getUsers);
router.post("/user", UsersController.addUser);

/** Post  */

module.exports = router;
