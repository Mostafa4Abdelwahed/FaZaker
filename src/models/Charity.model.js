import mongoose from "mongoose";

const CharitySchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Charity ||
  mongoose.model("Charity", CharitySchema);
