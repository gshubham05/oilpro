import mongoose from "mongoose";

const WellControlSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    description: String,
    content: String,
    mediaUrl: String,
    mediaType: { type: String, enum: ["image", "video"] },
  },
  { timestamps: true } // 👈 ADD THIS
);

export default mongoose.models.WellControl ||mongoose.model("WellControl", WellControlSchema);
