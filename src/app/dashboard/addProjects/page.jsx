"use client";

import { useState } from "react";
import JoditEditor from "jodit-react";
import { useRouter } from "next/navigation";

export default function AddProject() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    website_name: "",
    website_title: "",
    category: "",
    description: "",
    project_full_details: "",
    problem_solving: "",
    website_thumbnail: "",
    additional_images: "",
    technology: "",
    hosting: "",
    website_source: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const categories = [
    "Web Development",
    "UI/UX",
    "Mobile App",
    "E-commerce",
    "Other",
  ];

  // Upload image to ImgBB
  const uploadImageToImgBB = async (file) => {
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_KEY;
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        setFormData((prev) => ({ ...prev, website_thumbnail: data.data.url }));
      } else {
        console.error("ImgBB upload failed:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files[0]) {
      uploadImageToImgBB(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle rich text editor change
  const handleEditorChange = (newContent) => {
    setFormData({ ...formData, project_full_details: newContent });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setSuccess("Project added successfully!");
        setFormData({
          website_name: "",
          website_title: "",
          category: "",
          description: "",
          project_full_details: "",
          problem_solving: "",
          website_thumbnail: "",
          additional_images: "",
          technology: "",
          hosting: "",
          website_source: "",
        });
        router.push("/portfolio");
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>

      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="website_name"
          placeholder="Website Name"
          value={formData.website_name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />

        <input
          type="text"
          name="website_title"
          placeholder="Website Title"
          value={formData.website_title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />

        {/* Dropdown Category Selection */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>
            Select a Category
          </option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />

        <label className="block text-gray-700">Project Full Details:</label>
        <JoditEditor
          value={formData.project_full_details}
          onChange={handleEditorChange}
          className="border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="problem_solving"
          placeholder="Problem Solving"
          value={formData.problem_solving}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />

        {/* Image Upload Section */}
        <div className="flex gap-3">
          <input
            type="url"
            name="website_thumbnail"
            placeholder="Website Thumbnail URL"
            value={formData.website_thumbnail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Preview Uploaded Image */}
        {formData.website_thumbnail && (
          <img
            src={formData.website_thumbnail}
            alt="Uploaded Preview"
            className="w-full max-h-60 object-cover rounded-md mt-2"
          />
        )}

        <input
          type="text"
          name="additional_images"
          placeholder="Additional Images (comma-separated URLs)"
          value={formData.additional_images}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="technology"
          placeholder="Technologies (comma-separated)"
          value={formData.technology}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />

        <input
          type="text"
          name="hosting"
          placeholder="Hosting Details"
          value={formData.hosting}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="website_source"
          placeholder="Website Source Details"
          value={formData.website_source}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Project"}
        </button>
      </form>
    </div>
  );
}
