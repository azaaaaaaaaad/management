import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI
let db = null

export async function connectDB() {
  if (db) return db;

  try {
    const client = new MongoClient(uri)
    await client.connect()
    db = client.db()
    return db;
  } catch (error) {
    console.log('Failed to connect to mongodb!');
    process.exit(1)
  }
}

