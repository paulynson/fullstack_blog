const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, lowercase: true, unique: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

module.exports = UserModel;
