import React from "react";

export default function projectCard() {
  return (
    <div>
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg border p-2"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <img
          src={project?.images || "/placeholder.svg"}
          alt={project?.project_name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="text-xl font-semibold mb-2">
              {project?.project_name}
            </h3>
            <p>{project?.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
