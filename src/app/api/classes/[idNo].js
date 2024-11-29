// import clientPromise from "@/lib/mongodb";

// export default async function handler(req, res) {
//   if (req.method === "DELETE") {
//     try {
//       const { idNo } = req.query;
//       const client = await clientPromise;
//       const db = client.db(process.env.MONGODB_DB);
//       const collection = db.collection("classes");

//       const result = await collection.deleteOne({ idNo: String(idNo) });
//       if (result.deletedCount === 0)
//         return res.status(404).json({ error: "Class not found." });

//       res.status(200).json({ message: "Class deleted successfully." });
//     } catch (error) {
//       console.error("Error deleting class:", error);
//       res.status(500).json({ error: "Failed to delete class." });
//     }
//   }
// }
