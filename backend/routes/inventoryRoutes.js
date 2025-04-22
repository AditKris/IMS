const express = require("express");
const router = express.Router();
const {
  createItem,
  getItem,
  updateItem,
  deleteItem,
  createSeller,
  createCategory,
  createBrand,
  getSellers,
  getCategories,
  getBrands,
} = require("../controllers/inventoryController"); // Updated to use inventory controller functions

// Route to create a new inventory item
router.post("/items", createItem);
router.post("/sellers", createSeller);
router.post("/categories", createCategory);
router.post("/brands", createBrand);
// Route to get all inventory items
router.get("/items", getItem);
router.get("/sellers", getSellers);
router.get("/categories", getCategories);
router.get("/brands", getBrands);
// Route to update an inventory item
router.put("/:id", updateItem);

// Route to delete an inventory item
router.delete("/:id", deleteItem);



module.exports = router;