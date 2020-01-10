const router = require("express").Router();
const Reviews = require("./review-model");

/**
 * @api {post} https://backend-foodtruckr2.herokuapp.com/api/reviews
 * @apiName Add new a Review
 * @apiGroup Reviews
 *@apiSuccess  {String} message: 200
 * */
router.post("/", (req, res) => {
  Reviews.add(req.body)
    .then(review => {
      res.status(201).json(review);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the review"
      });
    });
});

/**
 * @api {put} https://backend-foodtruckr2.herokuapp.com/api/reviews
 * @apiName Update Review
 * @apiGroup Reviews
 * @apiSuccess  {String} message: 200
 * */
router.put(":id", (req, res) => {
  Reviews.update(req.params.id, req.body)
    .then(review => {
      if (review) {
        res.status(200).json(review);
      } else {
        res.status(404).json({ message: "The review could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the review item"
      });
    });
});

/**
 * @api {delete} https://backend-foodtruckr2.herokuapp.com/api/reviews
 * @apiName Delete Review
 * @apiGroup Reviews
 * @apiSuccess  {String} message: "The review has been removed."
 * */
router.delete("/:id", (req, res) => {
  Reviews.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "The review item has been removed" });
      } else {
        res.status(404).json({ message: "The review item could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the review"
      });
    });
});
module.exports = router;
