const { MongoClient } = require("mongodb");

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
  return client
}

export async function insertDocument(client, collection, document) {
  const db = client.db("events");

  const result = await db.collection(collection).insertOne(document);

  return result
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db('events');

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

  return documents
}