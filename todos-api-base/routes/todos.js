const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todos');


router.get('/', todoController.index);
router.get('/:id', todoController.todo);

module.exports = router;