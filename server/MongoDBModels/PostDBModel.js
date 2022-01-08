const mongoose = require('mongoose')
const MongoDBSchema = mongoose.Schema

const postSchema = new MongoDBSchema({
	name: String,
	email: String,
	title: String,
	description: String,
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)