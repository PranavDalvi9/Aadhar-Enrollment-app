const mongoose = require("mongoose");

const AdharDetailsSchema = new mongoose.Schema(
  {
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    Home_Address : { type: String, require: true },
    Adhar_Number : {type: String, require: true, minlength: 12, maxlength: 12 }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const AdharData = mongoose.model("events-Info", AdharDetailsSchema);
module.exports = AdharData;