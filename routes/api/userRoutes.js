const router = require("express").Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").put(updateUser).get(getSingleUser).delete(deleteUser);

// // /api/users/:userId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// // /api/users/:userId/assignments/:assignmentId
// router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
