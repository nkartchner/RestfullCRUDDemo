const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    title: String,
    description: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', TaskSchema);
