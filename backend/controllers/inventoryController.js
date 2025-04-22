// backend/controllers/inventoryController.js
const item = require("../models/item");
const Seller = require("../models/seller");
const Category = require("../models/category");
const Brand = require("../models/brand");

// Create a new inventory item
exports.createItem = async (req, res) => {
  try {
    console.log(req.body);
    const { name, stock, price, category, brand, seller, description } = req.body;

    // Validate required fields
    if (!name || !stock || !price || !category || !brand || !seller) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingCategory = await Category.findOne({ name: category });
    if (!existingCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Find the brand by name
    const existingBrand = await Brand.findOne({ name: brand });
    if (!existingBrand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    // Find the seller by name
    const existingSeller = await Seller.findOne({ name: seller });
    if (!existingSeller) {
      return res.status(404).json({ message: "Seller not found" });
    }
    // Create a new inventory item
    const newItem = new item({
      name,
      stock,
      price,
      category: existingCategory._id,
      brand: existingBrand._id,
      seller: existingSeller._id,
      description,
    });

    // Save the item to the database
    const savedItem = await newItem.save();

    res.status(201).json({ message: "Product added successfully", item: savedItem });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
};

// Get all inventory items
exports.getItem = async (req, res) => {
  try {
    const inventoryItems = await Inventory.find().sort({ lastUpdated: -1 });
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
};

// Update an inventory item
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemName, quantity, price, category, supplier } = req.body;
    const updatedItem = await Inventory.findByIdAndUpdate(
      id,
      { itemName, quantity, price, category, supplier, lastUpdated: Date.now() },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error });
  }
};

// Delete an inventory item
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Inventory.findByIdAndDelete(id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
};

exports.createSeller = async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const seller = new Seller({ name });
    await seller.save();
    res.status(201).json({ message: "Seller created successfully", seller });
  } catch (error) {
    res.status(500).json({ message: "Error creating seller", error });
  }
};

exports.createCategory = async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(201).json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

exports.createBrand = async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const brand = new Brand({ name });
    await brand.save();
    res.status(201).json({ message: "Brand created successfully", brand });
  } catch (error) {
    res.status(500).json({ message: "Error creating brand", error });
  }
};

exports.getSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sellers", error });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

exports.getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: "Error fetching brands", error });
  }
};