const prisma = require('../db');

exports.createOrder = async (req, res) => {
  const { productId, quantity_ordered } = req.body;

  try {
    // A transaction ensures all these steps succeed, or none of them do.
    const result = await prisma.$transaction(async (tx) => {
      // 1. Check current stock
      const product = await tx.product.findUnique({ where: { id: productId } });
      if (!product) throw new Error("Product not found");
      if (product.stock_quantity < quantity_ordered) throw new Error("Insufficient stock");

      // 2. Deduct stock safely
      await tx.product.update({
        where: { id: productId },
        data: { stock_quantity: product.stock_quantity - quantity_ordered }
      });

      // 3. Create the order record
      const order = await tx.order.create({
        data: { productId, quantity_ordered, status: "COMPLETED" }
      });

      return order;
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};