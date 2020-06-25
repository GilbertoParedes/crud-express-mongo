const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasks', TaskSchema);

/*
module.exports = function() {
    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var Task = Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return db.model('tasks', Task);
}
*/