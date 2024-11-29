// import clientPromise from "@/lib/mongodb";

// export default async function handler(req, res) {
//   if (req.method === "DELETE") {
//     try {
//       const { idNo } = req.query;

//       // Validate idNo
//       if (!idNo) {
//         return res.status(400).json({ error: "idNo is required for deletion." });
//       }

//       // Connect to MongoDB
//       const client = await clientPromise;
//       const db = client.db(process.env.MONGODB_DB);
//       const collection = db.collection("classes");

//       // Perform deletion
//       const result = await collection.deleteOne({ idNo: parseInt(idNo, 10) });

//       if (result.deletedCount === 0) {
//         return res.status(404).json({ error: "Class not found." });
//       }

//       return res.status(200).json({ message: "Class deleted successfully." });
//     } catch (error) {
//       console.error("Error deleting class:", error);
//       return res.status(500).json({ error: "Failed to delete class." });
//     }
//   } else {
//     res.setHeader("Allow", ["DELETE"]);
//     res.status(405).json({ error: `Method ${req.method} not allowed.` });
//   }
// }
