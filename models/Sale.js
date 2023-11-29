const mongoose = require('mongoose')

const SaleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        discount: {
            type: Number,
            require: true,
            default: 10,
            min: 10,
            max: 75
        },
        isActive: {
            type: Boolean,
            require: true,
            default: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Sale", SaleSchema)