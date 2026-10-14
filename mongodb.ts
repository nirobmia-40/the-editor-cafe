import { MongoClient } from "mongodb";

const options = {};
let clientPromise: Promise<MongoClient> | undefined;

declare global {
  // eslint-disable-next-line no-var
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

export default function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (process.env.NODE_ENV === "development") {
    if (!global.mongoClientPromise) {
      global.mongoClientPromise = new MongoClient(uri, options).connect();
    }
    return global.mongoClientPromise;
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri, options).connect();
  }
  return clientPromise;
}
