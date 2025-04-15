"use client";

import { useState } from "react";
// import JoditEditor from "jodit-react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
// Dynamically import JoditEditor
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

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
    additional_images: [],
    technology: [],
    hosting: {},
    website_source: {},
  });

  console.log("formData", formData);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const categories = [
    "Web Development",
    "UI/UX",
    "Mobile App",
    "E-commerce",
    "SaaS",
    "SEO",
    "Digital Marketing",
    "Branding",
    "Graphic Design",
    "Content Writing",
    "Video Editing",
    "Photography",
    "Real Estate",
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
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files[0]) {
      uploadImageToImgBB(files[0]);
    } else {
      setFormData((prev) => {
        if (name === "additional_images" || name === "technology") {
          return {
            ...prev,
            [name]: value.split(",").map((item) => item.trim()),
          };
        } else if (name === "hosting" || name === "website_source") {
          try {
            return { ...prev, [name]: value ? JSON.parse(value) : {} };
          } catch {
            return { ...prev, [name]: value };
          }
        }
        return { ...prev, [name]: value };
      });
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
          additional_images: [],
          technology: [],
          hosting: {},
          website_source: {},
        });
        router.push("/portfolio");
      } else {
        throw new Error(result.error || "Something went wrong");
      }
      toast.success("Project added successfully");
    } catch (err) {
      setError(err.message);
      toast.error("Failed to add project");
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
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
          required
        >
          <option value="" disabled>
            Select a Category
          </option>
          {categories.map((cat, index) => (
            <option key={index} value={cat} className="capitalize bg-white">
              {cat}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
          required
        />
        <ToastContainer />
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
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
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
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
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

        {/* Additional Images Section */}
        <h1 className="font-semibold text-sm text-gray-700">
          Additional Images (Array) → Enter like this: https://image1.jpg,
          https://image2.jpg, https://image3.jpg
        </h1>
        <input
          type="text"
          name="additional_images"
          placeholder="Additional Images (comma-separated URLs)"
          value={formData.additional_images.join(", ")}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
        />

        {/* Displaying Image Previews */}
        <h1 className="font-semibold text-sm text-gray-700">
          Technology (Array) → Enter like this: React, Next.js, MERN,
          JavaScript, Node.js
        </h1>
        <input
          type="text"
          name="technology"
          placeholder="Technologies (comma-separated)"
          value={formData.technology.join(", ")}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
          required
        />

        {/* Hosting (JSON Input) */}
        <h1 className="font-semibold text-sm text-gray-700">
          Hosting (Object): Enter as JSON: {"{"}"frontend": "Netlify",
          "backend": "Render", "database": "MongoDB Atlas" {"}"}
        </h1>
        <input
          type="text"
          name="hosting"
          placeholder="Hosting Details (JSON format)"
          value={
            formData.hosting && typeof formData.hosting === "object"
              ? JSON.stringify(formData.hosting)
              : formData.hosting
          }
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
        />

        {/* Website Source (JSON Input) */}
        <h1 className="font-semibold text-sm text-gray-700">
          Website Source (Object) → Enter as JSON: {"{"}"client_github_link":
          "https://github.com/example", "server_github_link":
          "https://github.com/example-server", "live_link":
          "https://example.com"{"}"}
        </h1>
        <input
          type="text"
          name="website_source"
          placeholder="Website Source (JSON format)"
          value={
            formData.website_source &&
            typeof formData.website_source === "object"
              ? JSON.stringify(formData.website_source)
              : formData.website_source
          }
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
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
