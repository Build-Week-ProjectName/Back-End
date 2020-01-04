const express = require("express");
const router = express.Router();
const roleHelper = require("../api/roleHelper");
const Operator = require("./operators-model");
const helperObj = require("../api/helperObj");

router.post("/", async (req, res) => {
  const [err, Operator] = await roleHelper(Operator.create(req.body));

  if (err) res.status(400).json(err);
  else
    res.status(201).json({
      created: `the following operator with the id ${operator}`,
      operator_info: req.body
    });
});

router.get("/", async (req, res) => {
  const [err, Operator] = await roleHelper(Operator.get());

  if (err) res.status(500).json(err);
  res.status(200).json(operators);
});

/// operator ID
router.get("/:id", async (req, res) => {
  const [err, operator] = await roleHelper(
    Operator.getById(req.params.operator_id)
  );

  if (err) res.status(500).json(err);
  else if (err || isEmptyObj(operator))
    res.status(404).json({ error: "There is no operator with this id" });
  else res.status(200).json(operator);
});

router.get("/:operator_id/trucks", async (req, res) => {
  const [err, truck] = await roleHelper(
    Operator.getTrucksById(req.params.operator_id)
  );

  if (err) res.status(500).json(err);
  else if (err || helperObj(truck))
    res
      .status(404)
      .json({ error: "There are no trucks associated with this id" });
  else res.status(200).json(truck);
});

router.put("/:id", async (req, res) => {
  const [err, operator] = await roleHelper(
    Operator.update(req.params.id, req.body)
  );

  if (err) res.status(500).json(err);
  else
    res.status(200).json({
      success: `The operator with id ${req.params.id} was updated with the following changes`,
      operator
    });
});

router.delete("/:id", async (req, res) => {
  const [err, count] = await roleHelper(Operator.remove(req.params.id));
  console.log(count);
  if (err) res.status(500).json(err);
  else
    res
      .status(200)
      .json({ deleted: `${count} operator of id ${req.params.id}` });
});

module.exports = router;
