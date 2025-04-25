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
  addStock,
  sellItem,
  getSales,
  getStockHistory,
  deleteSale,
  getStats,
  getDailySales,
} = require("../controllers/inventoryController"); 

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
router.get("/sales", getSales);
router.get("/items/:id/stock-history", getStockHistory);
router.get("/stats", getStats);
router.get("/daily-sales", getDailySales);
// Route to update an inventory item
router.put("/:id", updateItem);
router.put("/items/:id/add-stock", addStock);
router.put("/items/:id/sell", sellItem);

// Route to delete an inventory item
router.delete("/:id", deleteItem);
router.delete("/sales/:id", deleteSale);



module.exports = router;