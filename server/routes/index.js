const router = require('express').Router();
const Controller = require('../controllers/controller');

router.get('/api', Controller.getAllTodos);

router.post('/api', Controller.postTodo);

router.get('/api/:id', Controller.findById);

router.delete('/api/:id', Controller.deleteById);

router.put('/api/:id', Controller.updateById)

module.exports = router;