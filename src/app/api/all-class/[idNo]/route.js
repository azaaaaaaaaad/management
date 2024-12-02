import { connectDB } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {
  try {
    const {idNo} = await params;
    const db = await connectDB()
    const classesColl = db.collection('classes')
  
    // delete class from db
    await classesColl.deleteOne({idNo})

    return new Response( 
      JSON.stringify({message: "Class deleted successfully"}), 
      { status: 200, headers: { "Content-Type": 'application/json' } }
    ) 
  } catch (error) {
    return new Response(
      JSON.stringify({error: error.message || "Internal server error!"}),
      { status: 500, headers: {"Content-Type": "application/json"} }
    )
  }
}

export async function PATCH(req, { params }) {
  try {
    const {idNo} = await params;
    const db = await connectDB()
    const classesColl = db.collection('classes')

    const body = await req.json()
    const {_id, ...bodyWithoutId} = body 

  
    console.log('body without id data--- ', bodyWithoutId);
    

    // update class from db
    await classesColl.updateOne({_id: new ObjectId(body._id) }, {$set: bodyWithoutId}, {upsert: true})

    return new Response( 
      JSON.stringify({message: "Class updated successfully"}), 
      { status: 200, headers: { "Content-Type": 'application/json' } }
    ) 
  } catch (error) {
    return new Response(
      JSON.stringify({error: error.message || "Internal server error!"}),
      { status: 500, headers: {"Content-Type": "application/json"} }
    )
  }
}