import { NextResponse } from "next/server";
import { connect } from "../../../../../libs/dbConnect";
import Project from "@/app/models/Project";

// ✅ GET Single Car by ID
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
    const car = await Project.findById(id);

    if (!car) {
      return NextResponse.json(
        { error: "Car not found" },
        { status: 404 } // Not Found
      );
    }

    // ✅ Return data as JSON
    return NextResponse.json(car, { status: 200 }); // Remove `{ car }`, return car directly
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
