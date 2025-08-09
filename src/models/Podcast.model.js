import mongoose from "mongoose";

const PodcastSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Podcast ||
  mongoose.model("Podcast", PodcastSchema);