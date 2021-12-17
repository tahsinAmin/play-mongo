import mongoose from "mongoose";

const playersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jno: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  mass: {
    type: Number,
    required: true,
  },
  debut: {
    type: Number,
    required: true,
  },
  ppg: {
    type: Number,
    required: true,
  },
  rpg: {
    type: Number,
    required: true,
  },
  apg: {
    type: Number,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
});

export default mongoose.models.player ||
  mongoose.model("player", playersSchema);
