import mongoose from "mongoose";

const DrillingSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  description: String,
  mediaUrl: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Drilling ||mongoose.model("Drilling", DrillingSchema);