const mongoose = require('mongoose')

const StoreDataSchema = new mongoose.Schema(
    {
        crouselImages: [
            {
                imageTitle: {
                    type: String,
                    required: true
                },
                imageUrl: {
                    type: String,
                    required: true
                },
                imageCategory: {
                    type: String,
                    required: true
                }
            }
        ],
        sale: {
            title: {
                type: String,
                require: true
            },
            discount: {
                type: Number,
                default: 0,
                min: 0,
                max: 75
            }
        },
        cuponCodes: [
            {
                code: {
                    type: String,
                    required: true
                },
                discount: {
                    type: Number,
                    default: 10,
                    min: 10,
                    max: 50

                }
            }
        ]

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("StoreData", StoreDataSchema)