const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {
		type: Number,
		required: true,
	},

	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
    product: {
		type: String,
		required: true,
	},
    price: {
		type: String,
	},
    brand: {
		type: String,
		require:true,
	},
});

module.exports = User = mongoose.model("Register", UserSchema);