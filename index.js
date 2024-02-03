const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./src/db/connectDB");
require("dotenv").config();

const app = express();
app.get("/", (req, res) => {
	res.send({ message: "Server is running" });
});
const PORT = process.env.PORT;

const start = async () => {
	try {
		await connectDB(process.env.DATA_BASE_URL);
		app.listen(PORT, (req, res) => {
			console.log(`Serving is running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();
