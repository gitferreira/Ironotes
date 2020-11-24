const {Schema, model} = require("mongoose")

const NoteSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	user: {
		type: String,
		required: true,
	},
	imageURL: {
		type: String,
	}
}, {
	timestamps: true
})

module.exports = model("Note", NoteSchema)