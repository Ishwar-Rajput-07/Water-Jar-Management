import Order from "./../modal/Orders.js"
import asyncHandler from "express-async-handler"

export const addOrder = asyncHandler(async (req, res) => {
    await Order.create(req.body)
    res.json({ message: "Order Create Success" })
})

export const getUserOrders = asyncHandler(async (req, res) => {
    const result = await Order.find({ customer: req.params.id }).populate("customer").populate("jars")
    res.json({ message: "User Order Fetch Success", result })
})

export const getAllOrders = asyncHandler(async (req, res) => {
    const result = await Order.find().populate("customer").populate("jars")
    res.json({ message: "Order Fetch Success", result })
})

export const destroyOrders = asyncHandler(async (req, res) => {
    const result = await Order.deleteMany()
    res.json({ message: "Order Destroy Success" })
})