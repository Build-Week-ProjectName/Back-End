const router = require("express").Router();
const Trucks = require("../trucks/trucks-model");
const Operator = require("../operators/operators-model");

router.get("/trucks", (req, res) => {
  Trucks.find(truck)
    .then(truck => {
      res.status(200).json(truck);
    })
    .catch(error => {
      // logs error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the truck"
      });
    });
});

// /api/truck/:id should be used to get a truck item
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

// Adds new truck item
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

// updates truck item
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
