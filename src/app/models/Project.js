import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    website_name: { type: String, required: true },
    website_title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    project_full_details: { type: String, required: true }, // ✅ New Field
    problem_solving: { type: String, required: true },
    comparison: { type: Object, default: {} },
    website_thumbnail: { type: String, required: true },
    additional_images: { type: [String], default: [] },
    technology: { type: [String], required: true },
    hosting: { type: Object, default: {} },
    website_source: { type: Object, default: {} },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
