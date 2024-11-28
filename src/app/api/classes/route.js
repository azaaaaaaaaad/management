import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("classes");

    const body = await req.json();

    // Validation
    const requiredFields = ["teacherName", "idNo", "gender", "class", "subject", "section", "time", "date", "phone", "email"];
    const missingFields = requiredFields.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({ error: `Missing required fields: ${missingFields.join(", ")}` }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({ message: "Class added successfully", data: result }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error adding class:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add class", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

