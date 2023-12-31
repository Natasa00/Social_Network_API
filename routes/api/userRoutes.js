const router = require("express").Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").put(updateUser).get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// // /api/users/:userId/assignments/:assignmentId
// router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
