const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    organizer: {
      type: String,
      required: true,
    },

    registrationDeadline: {
      type: Date,
    },

    maxParticipants: {
      type: Number,
      default: 100,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);