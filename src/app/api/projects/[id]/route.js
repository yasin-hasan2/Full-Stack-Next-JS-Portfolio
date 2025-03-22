import { NextResponse } from "next/server";
import { connect } from "../../../../../libs/dbConnect";
import Project from "@/app/models/Project";
import mongoose from "mongoose";

// ✅ GET Single project by ID
export async function GET(request, { params }) {
  try {
    console.log("Received GET request");

    // Extract `id` correctly
    const id = params?.id; // ✅ Ensure params exists

    if (!id) {
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 } // Bad Request
      );
    }

    // ✅ Connect to MongoDB
    await connect();
    console.log("MongoDB connected");

    // ✅ Fetch the document by ID
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { error: "project not found" },
        { status: 404 } // Not Found
      );
    }

    // ✅ Return data as JSON
    return NextResponse.json(project, { status: 200 }); // Remove `{ project }`, return project directly
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle PUT request to update a specific document by ID

export async function PUT(request, { params }) {
  try {
    console.log("Received PUT request");

    // Extract `id` correctly
    const id = params?.id; // ✅ Ensure params exists

    if (!id) {
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 } // Bad Request
      );
    }

    // ✅ Connect to MongoDB
    await connect();
    console.log("MongoDB connected");

    // ✅ Parse the request body as JSON
    const body = await request.json();

    // ✅ Update the document by ID
    const updatedProject = await Project.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedProject) {
      return NextResponse.json(
        { error: "project not found" },
        { status: 404 } // Not Found
      );
    }

    // ✅ Return success response
    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
