const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, " the username exist"],
    validate: function (value) {
      return validator.isEmail(value);
    },
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [10, "minimum 10 caracters are required"],
    select: false, //response is show or not show the password,
  },
  createAt: {
    tape: date,
    default: new Date(),
  },
});
//Encryption of password,
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
