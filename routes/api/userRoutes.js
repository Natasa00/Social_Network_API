const router = require("express").Router();
const {
  createUser,
  getUsers,
  getSingleUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// // /api/users/:userId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// // /api/users/:userId/assignments/:assignmentId
// router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
