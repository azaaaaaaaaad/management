import { connectDB } from "@/lib/db";

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