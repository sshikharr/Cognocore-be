// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// GET /tasks - Fetch all tasks
router.get('/', taskController.getAllTasks);

// POST /tasks - Add a new task
router.post('/', taskController.addTask);

// DELETE /tasks/:id - Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;