const asyncHandler = require('express-async-handler')

const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

// @desc register new user
// @route /api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body
	if (!name || !email || !password) {
		res.status(400)
		throw new Error('Please include all details')
	}
	// find if user already exists
	const userExist = await User.findOne({ email })

	if (userExist) {
		res.status(400)
		throw new Error('User Already exists')
	}

	//Encrypt
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	// Create User
	const user = await User.create({ name, email, password: hashedPassword })

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
		})
	} else {
		res.status(400)
		throw new error('Invalid user data')
	}
})

// @desc login new user
// @route /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
	res.send('Login Route')
})

module.exports = {
	registerUser,
	loginUser,
}
