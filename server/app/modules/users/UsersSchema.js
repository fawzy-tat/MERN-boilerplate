const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UsersSchema = new schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = Users = mongoose.model("user", UsersSchema);
