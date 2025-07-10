const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  assignedTo: String,
  status: String,
  dueDate: String,
  priority: String,
  comments: String
});

module.exports = mongoose.model('Task', taskSchema);