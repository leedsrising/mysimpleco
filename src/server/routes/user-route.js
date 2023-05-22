// Import express
const express = require('express')

// Import books-controller
const userRoutes = require('./../controllers/user-controller.js')

// Create router
const router = express.Router()

// GET request for all users
router.get('/all', userRoutes.usersAll)

// Add route for POST request to create new user
router.post('/create', userRoutes.userCreate)

// Add route for PUT request to delete specific user
router.put('/delete', userRoutes.userDelete)

// Add route for PUT request to reset user list
router.put('/reset', userRoutes.usersReset)

// Export router
module.exports = router