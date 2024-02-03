const mongoose = require("mongoose");

const connectDB = async (url) => {
	try {
		const connect = await mongoose.connect(url);
		if (connect.STATES.connected) {
			console.log("Connected to Database");
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
