module.exports = function(app) {
  const controller = require('../controllers/task.controller');
  app.get('/tasks', controller.getTasks);
  app.get('/task/:id', controller.getSingleTask);
  app.post('/tasks/new', controller.addTask);
  app.put('/task/update/:id', controller.update);
  app.delete('/task/delete/:id', controller.delete);
};
