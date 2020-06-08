const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware.js");
const checkRole = require("../auth/check-role-middleware.js");

router.get("/", (req, res) => {
  //log the token
  console.log("token", req.decodedToken);

  //pull up the list of the Users
  Users.find()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
