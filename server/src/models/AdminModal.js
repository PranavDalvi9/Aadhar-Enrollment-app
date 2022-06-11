const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const AdminData = mongoose.model("admin-Info", AdminSchema);
module.exports = AdminData;