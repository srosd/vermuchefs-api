const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const hostSchema = new Schema ({
  name: {type: String, required: true},
  email: {type: String, required: true}
});

const Host = mongoose.model('Host', hostSchema);

module.exports = Host;