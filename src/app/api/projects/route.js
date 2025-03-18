/// ============================
/// GET REQUEST - Retrieve All Entries

import mongoose from "mongoose";
import { connect } from "../../../../libs/dbConnect";
import { NextResponse } from "next/server";
import Project from "@/app/models/Project";

/// ============================
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

// Post request

export async function POST(request) {
  try {
    // Connect to MongoDB
    await connect();

    // Parse request body
    const body = await request.json();

    // Validate required fields
    if (
      !body.website_name ||
      !body.website_title ||
      !body.category ||
      !body.description ||
      !body.website_thumbnail ||
      !body.technology
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new project document
    const newProject = new Project(body);
    await newProject.save();

    // Return success response
    return NextResponse.json(
      { message: "Project added successfully", project: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
