const mongoose = require("mongoose");

const AdharDetailsSchema = new mongoose.Schema(
  {
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    // Home_Address: {type: String, Math.floor(Math.random()*1E16) },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const AdharData = mongoose.model("events-Info", AdharDetailsSchema);
module.exports = AdharData;