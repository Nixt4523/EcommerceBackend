const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_DB_URL).then(() => {
        console.log("Connected to Database..!")
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connectDB