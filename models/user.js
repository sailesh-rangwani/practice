// getting-started.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    phone: Number,
  });

mongoose.models = {}
export default mongoose.model("user", UserSchema);