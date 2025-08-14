import mongoose from "mongoose";

const PodcastSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Podcast ||
  mongoose.model("Podcast", PodcastSchema);