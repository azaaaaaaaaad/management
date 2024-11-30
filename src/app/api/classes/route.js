import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("classes");

    const body = await req.json();

    // Validation
    const requiredFields = [
      "teacherName",
      "idNo",
      "gender",
      "class",
      "subject",
      "section",
      "startTime",
      "endTime",
      "date",
      "phone",
      "email",
    ];
    const missingFields = requiredFields.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({ error: `Missing required fields: ${missingFields.join(", ")}` }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate time format
    const timeRegex = /^\d{2}:\d{2}$/; // Validates time in HH:mm format
    if (!timeRegex.test(body.startTime) || !timeRegex.test(body.endTime)) {
      return new Response(
        JSON.stringify({ error: "Invalid time format. Use HH:mm for startTime and endTime." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Combine startTime and endTime into a single time range for storage/display
    const timeRange = `${body.startTime} - ${body.endTime}`;
    const classData = { ...body, time: timeRange };

    // Insert into the database
    const result = await collection.insertOne(classData);

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


export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("classes");

    const classes = await collection.find({}).toArray();

    return new Response(JSON.stringify(classes), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching classes:", error);
    return new Response("Failed to fetch classes", { status: 500 });
  }
}







