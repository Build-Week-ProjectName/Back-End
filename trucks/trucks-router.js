const router = require("express").Router();
const Trucks = require("../trucks/trucks-model");
const Operators = require("../operators/operators-model");

// router.get("/trucks", (req, res) => {
//   Trucks.find(truck)
//     .then(truck => {
//       res.status(200).json(truck);
//     })
//     .catch(error => {
//       // logs error to server
//       console.log(error);
//       res.status(500).json({
//         message: "Error retrieving the truck"
//       });
//     });
// });

// // /api/truck/:id should be used to get a truck item
// router.get("/:id", (req, res) => {
//   Trucks.findById(req.params.id)
//     .then(truck => {
//       if (truck) {
//         res.status(200).json(truck);
//       } else {
//         res.status(404).json({ message: "Truck is not found" });
//       }
//     })
//     .catch(error => {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: "Error retrieving the Truck."
//       });
//     });
// });

// // Adds new truck item
// router.post("/", (req, res) => {
//   Trucks.add(req.body)
//     .then(truck => {
//       res.status(201).json(truck);
//     })
//     .catch(error => {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: "Error adding the truck"
//       });
//     });
// });

// // updates truck item
// router.put(":id", (req, res) => {
//   Trucks.update(req.params.id, req.body)
//     .then(truck => {
//       if (truck) {
//         res.status(200).json(truck);
//       } else {
//         res.status(404).json({ message: "The truck could not be found" });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({
//         message: "Error updating the truck "
//       });
//     });
// });

// router.delete("/:id", (req, res) => {
//   Trucks.remove(req.params.id)
//     .then(count => {
//       if (count > 0) {
//         res.status(200).json({ message: "The truck has been removed" });
//       } else {
//         res.status(404).json({ message: "The truck could not be found" });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({
//         message: "Error removing the truck."
//       });
//     });
// });
// module.exports = router;

/**
 *@api {get} /trucks
 *@apiName Gettrucks
 *@apiGroup trucks
 **/

router.get("/", async (req, res) => {
  const [err, trucks] = await withCatch(Trucks.find());

  if (err) res.status(500).json(err);
  else if (err || isEmptyObj(trucks))
    res.status(404).json({ error: "No trucks available." });
  else res.status(200).json(trucks);
});

/**
 *@api {get} /trucks/:operator_id
 *@apiName GetTrucksByOperatorId
 *@apiGroup trucks
 **/

router.get("/:operators_id", async (req, res) => {
  const [err, trucks] = await withCatch(
    Operators.findById(req.params.operators_id)
  );

  if (err) res.status(500).json(err);
  else if (err || isEmptyObj(trucks))
    res.status(404).json({
      error: "There are no trucks registered with this Operator yet."
    });
  else res.status(200).json(trucks);
});

/**
 *@api {post} /trucks
 *@apiName PostTrucks
 *@apiGroup trucks
 **/

router.post("/", async (req, res) => {
  const [err, trucks] = await withCatch(Trucks.add(req.body));

  if (err) res.status(500).json(err);
  else
    res.status(201).json({
      created: `following truck with id of ${trucks}`,
      trucks: req.body
    });
});

/**
 *@api {put} /trucks/:truck_id
 *@apiName PutTrucks
 *@apiGroup trucks
 *@apiParam {Number} id truck's unique ID.
 **/

router.put("/:id", async (req, res) => {
  const [err, trucks] = await withCatch(Trucks.update(req.params.id, req.body));

  if (err) res.status(500).json(err);
  else
    res.status(200).json({
      updated: `following TRUCK with id of ${req.params.id}`,
      newJob: req.body
    });
});

/**
 *@api {delete} /truck/:truck_id
 *@apiName DeleteTrucks
 *@apiGroup trucks
 **/

router.delete("/:id", async (req, res) => {
  const [err, count] = await withCatch(Trucks.remove(req.params.id));

  if (err) res.status(500).json(err);
  else
    res
      .status(200)
      .json({ deleted: `${count} Truck(s) of id ${req.params.id}` });
});

module.exports = router;
