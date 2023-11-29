const mongoose = require('mongoose')

const CuponCodeSchema = new mongoose.Schema(
    {
        cuponCode: {
            type: String,
            unique: true,
            required: true
        },
        cuponDiscount: {
            type: Number,
            default: 10,
            required: true,
            min: 10,
            max: 75
        },
    }
)

module.exports = mongoose.model("CuponCodes", CuponCodeSchema)