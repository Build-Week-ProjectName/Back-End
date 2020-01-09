const router = require("express").Router();
const Menu = require("../menu/menu-model");

/**
 * @api {get} https://backend-foodtruckr2.herokuapp.com/api/menu
 * @apiName Get Menu
 * @apiGroup Menu
 * @apiSuccess {String} message: 200
 * */
router.get("/", (req, res) => {
  Menu.getMenu()
    .then(menu => {
      res.status(200).json(menu);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error retrieving the menu"
      });
    });
});

/**
 
 * @api {number} https://backend-foodtruckr2.herokuapp.com/api/menu/id  example: https://backend-foodtruckr2.herokuapp.com/api/menu/1
 * @apiName Get Menu by id
 * @apiGroup Menu
 * @apiSuccess  {String} message: 200
 * */

router.get("/:id", (req, res) => {
  Menu.findById(req.params.id)
    .then(menu => {
      if (menu) {
        res.status(200).json(menu);
      } else {
        res.status(404).json({ message: "menu item is not found" });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the menu item"
      });
    });
});

/**
 * @api {post} https://backend-foodtruckr2.herokuapp.com/api/menu
 * @apiName Add Menu Item
 * @apiGroup Menu
 * @apiSuccess {String} message: 200
 * */
router.post("/", (req, res) => {
  Menu.add(req.body)
    .then(menu => {
      res.status(201).json(menu);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the menu"
      });
    });
});

/**
 * @api {put} https://backend-foodtruckr2.herokuapp.com/api/menu/id
 * @apiName Update Menu Item by id
 * @apiGroup Menu
 * @apiSuccess {String} message: 200
 * */
router.put(":id", (req, res) => {
  Menu.update(req.params.id, req.body)
    .then(menu => {
      if (menu) {
        res.status(200).json(menu);
      } else {
        res.status(404).json({ message: "The menu could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the menu item"
      });
    });
});

/**
 * @api {delete} https://backend-foodtruckr2.herokuapp.com/api/menu/id
 * @apiName Delete Menu Item by id
 * @apiGroup Menu
 * @apiSuccess {String} message: "The menu item has been removed"
 * */
router.delete("/:id", (req, res) => {
  Menu.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "The menu item has been removed" });
      } else {
        res.status(404).json({ message: "The menu item could not be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error removing the menu item"
      });
    });
});
module.exports = router;
