const prisma = require('../db');

exports.getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { sku, name, price, stock_quantity } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: { sku, name, price, stock_quantity }
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: "Could not create product. SKU might already exist." });
  }
};