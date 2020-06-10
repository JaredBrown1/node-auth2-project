const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
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
