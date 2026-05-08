const jwt = require("jsonwebtoken")
require('dotenv').config()

const generateToken = (user) => {
        try {
            return jwt.sign(
                {
                    id: user._id,
                    role: user.role
                },
                process.env.JWT_TOKEN,
                { expiresIn: "1d" }
            )
        } catch (error) {
            return console.error(error)
        }
}

module.exports = generateToken