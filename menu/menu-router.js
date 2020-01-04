const router = require("express").Router();
const Menu = require("../menu/menu-model");

//only runs if url has /api/menu in it
router.get("/menu", (req, res) => {
  Menu.find(menu)
    .then(menu => {
      res.status(200).json(menu);
    })
    .catch(error => {
      // logs error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the menu"
      });
    });
});

// /api/menu/:id should be used to get a menu item
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

// Adds new menu item
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

// updates menu item
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
