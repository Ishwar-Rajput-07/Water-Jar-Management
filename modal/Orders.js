import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    },
    date: {
        type: Date,
        required: true
    },
    jars: {
        type: mongoose.Types.ObjectId,
        ref: "jar",
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    paid: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

export default mongoose.model("order", orderSchema)