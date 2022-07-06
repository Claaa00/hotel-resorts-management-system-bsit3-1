const express = require('express')
const router = express.Router()
// Import Controllers
const { getAllRooms, createRoom } = require('../controller/roomsController')

// Routes

// Get all rooms
router.get('/', getAllRooms)

// Create a room
router.post('/', createRoom)

module.exports = router
