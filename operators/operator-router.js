const express = require("express");
const router = express.Router();
const Operator = require("./operators-model");

/**
 * @api {get} https://backend-foodfruckr2.herokuapp.com/api/operator
 * @apiName Get Operator
 * @apiGroup Operator
 * @apiSuccess  {String} message: 200
 * */
router.get("/", (req, res) => {
  Operator.getOperators()
    .then(operator => {
      res.json(operator);
    })
    .catch(err => res.send(err));
});

/**
 * @api {number} https://backend-foodfruckr2.herokuapp.com/api/operator/id
 * @apiName Get Operator by id
 * @apiGroup Operator
 * @apiSuccess  {String} message: 200
 * */
router.get("/:id", (req, res) => {
  Operator.getById(req.params.id)
    .then(operator => {
      if (operator) {
        res.status(200).json(operator);
      } else {
        res.status(404).json({ message: "operator is not found" });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the Operator."
      });
    });
});

/**
 * @api {post} https://backend-foodfruckr2.herokuapp.com/api/operator/id
 * @apiName Add a new Operator
 * @apiGroup Operator
 * @apiSuccess  {String} message: 200
 * */
router.post("/", (req, res) => {
  Operator.add(req.body)
    .then(operator => {
      res.status(201).json(operator);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the operator"
      });
    });
});

/**
 * @api {number} https://backend-foodfruckr2.herokuapp.com/api/operator/id
 * @apiName Update Operator by id
 * @apiGroup Operator
 * @apiSuccess  {String} message: 200
 * */
router.put(":id", (req, res) => {
  Operator.update(req.params.id, req.body)
    .then(operator => {
      if (operator) {
        res.status(200).json(operator);
      } else {
        res.status(404).json({ message: "The operator could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the operator"
      });
    });
});

/**
 * @api {number} https://backend-foodfruckr2.herokuapp.com/api/operator/id
 * @apiName Delete User by id
 * @apiGroup Operator
 * @apiSuccess  {String} message: 200
 * */

router.delete("/:id", (req, res) => {
  Operator.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "The operator has been removed" });
      } else {
        res.status(404).json({ message: "The operator could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the operator."
      });
    });
});
module.exports = router;
