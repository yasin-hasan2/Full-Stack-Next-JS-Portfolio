/// ============================
/// GET REQUEST - Retrieve All Entries

import mongoose from "mongoose";
import { connect } from "../../../../libs/dbConnect";
import { NextResponse } from "next/server";
import Project from "@/app/models/Project";

/// ============================ get request
export async function GET(request) {
  console.log("Received GET request"); // Logs when a request is received

  try {
    // Connect to MongoDB
    await connect();
    console.log("MongoDB is now connected");

    // Ensure Mongoose is ready before fetching data
    while (!mongoose.connection.readyState) {
      console.log("Waiting for MongoDB...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
    }

    // Retrieve all documents from the database
    const allProjects = await Project.find();

    // Return data as JSON
    return NextResponse.json({ allProjects });
  } catch (error) {
    console.error("Error:", error);

    // Return error response
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 } // HTTP status code for internal server error
    );
  }
}

/// ============================ post request

export async function POST(request) {
  try {
    console.log("🔵 Connecting to database...");
    await connect();
    console.log("✅ Database connected!");

    console.log("🔵 Parsing request body...");
    const body = await request.json();
    console.log("✅ Received Data:", body);

    // Validate required fields
    if (
      !body.website_name ||
      !body.website_title ||
      !body.category ||
      !body.description ||
      !body.website_thumbnail ||
      !body.technology
    ) {
      console.error("❌ Missing required fields:", body);
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("🔵 Creating new project...");
    const newProject = new Project(body);
    await newProject.save();
    console.log("✅ Project saved successfully:", newProject);

    return NextResponse.json(
      { message: "Project added successfully", project: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/// delete request

export async function DELETE(request) {
  try {
    console.log("Received DELETE request");

    // Extract `id` correctly
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    console.log("ID:", id);

    if (!id) {
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connect();
    console.log("MongoDB connected");

    // Find and delete the document by ID
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Return success response
    return NextResponse.json(
      { message: "Project deleted successfully", project: deletedProject },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
