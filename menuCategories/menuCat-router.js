const router = require("express").Router();
const MenuCat = require("./menuCat-model");

/**
 * @api {post} https://backend-foodtruckr2.herokuapp.com/api/menu_Categories
 * @apiName Add new categories
 * @apiGroup Menu-Categories
 * @apiSuccess  {String} message: 200
 * */
router.post("/", (req, res) => {
  MenuCat.add(req.body)
    .then(category => {
      res.status(201).json(category);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the category"
      });
    });
});

/**
 * @api {put} https://backend-foodtruckr2.herokuapp.com/api/menu_Categories
 * @apiName Update Menu Categories
 * @apiGroup Menu-Categories
 * @apiSuccess  {String} message: 200
 * */
router.put(":id", (req, res) => {
  MenuCat.update(req.params.id, req.body)
    .then(category => {
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ message: "The category could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the category item"
      });
    });
});

/**
 * @api {delete} https://backend-foodtruckr2.herokuapp.com/api/menu_Categories
 * @apiName Delete categories
 * @apiGroup Menu-Categories
 * @apiSuccess  {String} message: "The category item has been removed."
 * */
router.delete("/:id", (req, res) => {
  MenuCat.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "The category item has been removed" });
      } else {
        res
          .status(404)
          .json({ message: "The category item could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the category item"
      });
    });
});
module.exports = router;
