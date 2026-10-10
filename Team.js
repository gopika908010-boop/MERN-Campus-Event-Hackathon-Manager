
const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      trim: true
    },
    hackathonName: {
      type: String,
      required: true
    },
    members: [
      {
        name: String,
        email: String
      }
    ],
    leaderEmail: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["Active", "Completed"],
      default: "Active"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);