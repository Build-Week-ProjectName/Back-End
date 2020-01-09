const router = require("express").Router();
const Trucks = require("../trucks/trucks-model");
// const Operators = require("../operators/operators-model");

/**
 * @api {get} https://backend-foodtruckr2.herokuapp.com/api/trucks
 * @apiName Get Trucks
 * @apiGroup Trucks
 * @apiSuccess  {String} message: 200
 * */

router.get("/", (req, res) => {
  Trucks.getTrucks()
    .then(trucks => {
      res.json(trucks);
    })
    .catch(err => res.send(err));
});

/**
 * @api {number} https://backend-foodtruckr2.herokuapp.com/api/trucks/id
 * @apiName Get User by id
 * @apiGroup Trucks
 * @apiSuccess  {String} message: 200
 * */
router.get("/:id", (req, res) => {
  Trucks.findById(req.params.id)
    .then(truck => {
      if (truck) {
        res.status(200).json(truck);
      } else {
        res.status(404).json({ message: "Truck is not found" });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the Truck."
      });
    });
});

/**
 * @api {post} https://backend-foodtruckr2.herokuapp.com/api/trucks
 * @apiName Add new Truck
 * @apiGroup Trucks
 * @apiSuccess  {String} message: 200
 * */
router.post("/", (req, res) => {
  Trucks.add(req.body)
    .then(truck => {
      res.status(201).json(truck);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the truck"
      });
    });
});

/**
 * @api {put} https://backend-foodtruckr2.herokuapp.com/api/trucks/id
 * @apiName Update Truck by id
 * @apiGroup Trucks
 * @apiSuccess  {String} message: 200
 * */
router.put(":id", (req, res) => {
  Trucks.update(req.params.id, req.body)
    .then(truck => {
      if (truck) {
        res.status(200).json(truck);
      } else {
        res.status(404).json({ message: "The truck could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the truck "
      });
    });
});

/**
 * @api {delete} https://backend-foodtruckr2.herokuapp.com/api/trucks/id
 * @apiName Delete Truck by id
 * @apiGroup Trucks
 * @apiSuccess  {String} message:  "The truck has been removed"
 * */
router.delete("/:id", (req, res) => {
  Trucks.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "The truck has been removed" });
      } else {
        res.status(404).json({ message: "The truck could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the truck."
      });
    });
});
module.exports = router;
