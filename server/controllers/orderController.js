import asyncHanlder from "express-async-handler";
import Order from "../models/orderModel.js";

export const getAllOrders = asyncHanlder(async (req, res) => {
  try {
    const orders = await Order.find({});

    res.status(200).json({
      results: orders.length,
      orders,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      msg: err.message,
    });
  }
});

export const addOrderItems = asyncHanlder(async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items found");
    } else {
      const order = await Order.create({
        user: req.user._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        totalPrice,
      });
      res.status(201).json({
        order,
      });
    }
  } catch (err) {
    res.status(400).json({
      msg: err,
      stack: err.stack,
    });
  }
});

export const getSingleOrderById = asyncHanlder(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate({
      path: "user",
      select: "email name",
    });

    res.status(200).json({
      order,
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
      stack: err.stack,
    });
  }
});

export const updateUserOrderPaid = asyncHanlder(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = new Date();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        email_address: req.body.payer.email_address,
        updated_time: req.body.updated_time,
      };
    }

    const paidUserOrder = await order.save();
    res.status(201).json({
      paidUserOrder,
    });
  } catch (err) {
    res.status(400).json({
      msg: err.message,
      stack: err.stack,
    });
  }
});
