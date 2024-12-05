
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the MongoDB client
  // between hot reloads of Next.js app.
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's safe to not use a global variable.
  clientPromise = client.connect();
}

export default clientPromise;

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // import { MongoClient } from "mongodb";

// // const uri = process.env.MONGODB_URI;
// // // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// // const client = new MongoClient(uri);


// let clientPromise;

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   clientPromise = client.connect();
// }

// export default clientPromise;

