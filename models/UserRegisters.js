const mongoose = require("mongoose");

const UserRegisters = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  username: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
});
const Register =new mongoose.model("Register",UserRegisters)
module.exports = Register;
