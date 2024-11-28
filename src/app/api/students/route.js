import clientPromise from "@/lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('students'); // or whatever your collection is called

    const students = await collection.find({}).toArray(); // Get all students from collection

    return new Response(JSON.stringify(students), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return new Response('Failed to fetch students', { status: 500 });
  }
}


export async function POST(req) {
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB);
      const collection = db.collection('students'); // use your collection name
  
      const body = await req.json(); // Parse the incoming JSON body
  
      // Insert the data into the MongoDB collection
      const result = await collection.insertOne(body);
  
      return new Response(
        JSON.stringify({ message: 'Item added successfully', data: result }),
        {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      return new Response('Failed to insert item', { status: 500 });
    }
  }
  