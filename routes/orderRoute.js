import express from "express"
import { addOrder, destroyOrders, getAllOrders, getUserOrders } from "../controllers/orderController.js"


const router = express.Router()

router
    .get("/", getAllOrders)
    .get("/:id", getUserOrders)  // : dynamic Id mhanun
    .post("/add", addOrder)
    .delete("/destroy", destroyOrders)

export default router