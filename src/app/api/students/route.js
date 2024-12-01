

import clientPromise from "@/lib/mongodb";
const { ObjectId } = require("mongodb");

// GET - Fetch all students
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("students");

    const students = await collection.find({}).toArray();

    return new Response(JSON.stringify(students), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return new Response("Failed to fetch students", { status: 500 });
  }
}

// POST - Add a new student
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("students");

    const body = await req.json();

    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({ message: "Item added successfully", data: result }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return new Response("Failed to insert item", { status: 500 });
  }
}


// DELETE - Remove a student based on the _id
export async function DELETE(req) {
  try {
    // Extract student ID from query params
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return new Response("Student ID is required", { status: 400 });
    }

    // Validate the ID format (check if it's a valid MongoDB ObjectId)
    if (!ObjectId.isValid(id)) {
      return new Response("Invalid student ID", { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("students");

    // Perform the delete operation by _id
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    // If no student is found and deleted
    if (result.deletedCount === 0) {
      return new Response("Student not found", { status: 404 });
    }

    // Return success response
    return new Response(
      JSON.stringify({ message: "Student deleted successfully", data: result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting student:", error);
    return new Response("Failed to delete student", { status: 500 });
  }
}

