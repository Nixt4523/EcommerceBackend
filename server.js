const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./utils/connectDB");

const authRoutes = require("./routes/AuthRouter");
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");
const cartRotues = require("./routes/CartRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const crouselImagesRoutes = require("./routes/CrouselImageRoutes");
const saleRoutes = require("./routes/SaleRoutes");
const cuponCodeRoutes = require("./routes/CuponCodeRoutes");

const app = express();

dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRotues);
app.use("/api/order", orderRoutes);
app.use("/api/crousel", crouselImagesRoutes);
app.use("/api/sale", saleRoutes);
app.use("/api/cupon", cuponCodeRoutes);

app.listen(process.env.PORT || 5000, () => {
	try {
		connectDB();
		console.log("Server Started..!");
	} catch (error) {
		console.log("Server Error");
	}
});
