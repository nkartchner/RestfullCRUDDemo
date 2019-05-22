const Task = require('../models/task.model');

exports.getTasks = (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
};

exports.getSingleTask = (req, res) => {
  Task.findOne({ _id: req.params.id })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
};
exports.addTask = (req, res) => {
  const task = new Task(req.body);
  task.save(function(err, data) {
    if (err) return res.json(err);
    res.json(data);
  });
};
exports.update = (req, res) => {
  Task.updateOne({ _id: req.params.id }, req.body)
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
};

exports.delete = (req, res) => {
  Task.findByIdAndRemove(req.params.id)
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
};
