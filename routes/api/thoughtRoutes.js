const router = require("express").Router();
const {
  // getThoughts,
  // getSingleThought,
  createThought,
  // updateThought,
  // deleteThought,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").post(createThought);

// /api/thoughts/:thoughtId
// router
//   .route('/:thoughtId')
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

module.exports = router;
