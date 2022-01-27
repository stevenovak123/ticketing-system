const mongoose = require('mongoose')

const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`Connected with mongo ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.log(`Error: ${error.message}`.underline.bold)
		process.exit(1)
	}
}

module.exports = connectDb
