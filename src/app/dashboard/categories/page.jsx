"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CategoriesPage() {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting category:", categoryName);
    setCategoryName("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Manage Categories
      </h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="New category name"
            className="flex-grow border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition duration-200"
          >
            Add Category
          </button>
        </div>
      </form>
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-gray-600">Categories will be displayed here...</p>
      </div>
    </motion.div>
  );
}
