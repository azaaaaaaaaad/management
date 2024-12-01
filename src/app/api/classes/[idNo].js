import clientPromise from "@/lib/mongodb";

export async function PUT(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("classes");

    const idNo = params.idNo;
    const body = await req.json();

    if (!idNo) {
      return new Response(
        JSON.stringify({ error: "idNo is required for updating a class" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate time format if updating the time
    if (body.startTime || body.endTime) {
      const timeRegex = /^\d{2}:\d{2}$/; // Validates time in HH:mm format
      if (
        (body.startTime && !timeRegex.test(body.startTime)) ||
        (body.endTime && !timeRegex.test(body.endTime))
      ) {
        return new Response(
          JSON.stringify({ error: "Invalid time format. Use HH:mm for times." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Combine startTime and endTime into a single time range if provided
    if (body.startTime && body.endTime) {
      body.time = `${body.startTime} - ${body.endTime}`;
      delete body.startTime;
      delete body.endTime;
    }

    const result = await collection.updateOne(
      { idNo },
      { $set: body }
    );

    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Class not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Class updated successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating class:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update class", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("classes");

    const idNo = params.idNo;

    if (!idNo) {
      return new Response(
        JSON.stringify({ error: "idNo is required for deleting a class" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await collection.deleteOne({ idNo });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Class not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Class deleted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting class:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete class", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
