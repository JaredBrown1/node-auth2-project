const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware.js");

// router.get("/", restricted, async (req, res) => {
//   try {
//     const users = await Users;
//     if (users) {
//       res.status(200).send(users);
//     } else {
//       res.status(404).json({ message: "There are no users in the database" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: "There is an error with the server" });
//   }
// });

router.get("/", restricted, async (req, res) => {
  //log the token
  console.log("token", req.decodedToken);

  //pull up the list of the Users
  await Users.find()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
