import mongoose from "mongoose";

const SermonSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    voice: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    sheikh: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Sermon ||
  mongoose.model("Sermon", SermonSchema);
