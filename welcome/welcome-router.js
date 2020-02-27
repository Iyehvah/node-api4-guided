const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message: process.env.SECRET_MESSAGE || "Welcom",
	})
})

module.exports = router
