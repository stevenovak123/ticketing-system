const express = require('express')
const colors = require('colors')

const dotenv = require('dotenv').config()

const { errorHandler } = require('./middleware/errorMiddleware')

const connectDb = require('./config/db')

const PORT = process.env.PORT || 8000

//database connect
connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Ticketing system API' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`${PORT} server`))
