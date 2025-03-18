"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../components/layout";

export default function AddProject() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    githubUrl: "",
    serverUrl: "",
    clientUrl: "",
    liveUrl: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.success) {
        setFormData((prev) => ({ ...prev, image: data.data.url }));
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/portfolio");
      } else {
        throw new Error("Failed to add project");
      }
    } catch (error) {
      console.error("Error adding project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          Add New Project
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
              className="mt-1 block w-full"
              onChange={handleImageUpload}
            />
          </div>
          <div>
            <label
              htmlFor="githubUrl"
              className="block text-sm font-medium text-gray-700"
            >
              GitHub URL
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="serverUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Server URL
            </label>
            <input
              type="url"
              id="serverUrl"
              name="serverUrl"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="clientUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Client URL
            </label>
            <input
              type="url"
              id="clientUrl"
              name="clientUrl"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="liveUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Live URL
            </label>
            <input
              type="url"
              id="liveUrl"
              name="liveUrl"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              {isLoading ? "Adding Project..." : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
