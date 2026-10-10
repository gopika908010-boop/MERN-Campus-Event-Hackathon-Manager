const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    studentName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    collegeName: {
      type: String,
      required: true,
    },

    teamName: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Registered", "Cancelled"],
      default: "Registered",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Registration",
  registrationSchema
);