import clientPromise from "@/lib/mongodb";

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

// PUT - Update a student
export async function PUT(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("students");

    const { id, ...updateData } = await req.json(); // Parse the request body and destructure
    const { ObjectId } = require("mongodb");

    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, // Find by ID
      { $set: updateData } // Update fields
    );

    if (result.matchedCount === 0) {
      return new Response("Student not found", { status: 404 });
    }

    return new Response(
      JSON.stringify({ message: "Student updated successfully", data: result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating student:", error);
    return new Response("Failed to update student", { status: 500 });
  }
}

// DELETE - Remove a student
export async function DELETE(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("students");

    const { id } = await req.json(); // Parse the request body to get the ID
    const { ObjectId } = require("mongodb");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response("Student not found", { status: 404 });
    }

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
