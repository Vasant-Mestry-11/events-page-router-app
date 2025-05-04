import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

async function connectDatabase() {
  const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
  return client
}

async function insertDocument(client, document) {
  const db = client.db("events");

  return await db.collection("newsletter").insertOne(document);
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address",
      });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({
        message: "Failed to connect to the database"
      })
      return;
    }

    try {
      await insertDocument(client, { email })
      client.close();
    } catch (error) {
      res.status(500).json({
        message: "Failed to insert the record"
      })
      return;
    }

    return res.status(201).json({
      message: "Email added successfully",
    });
  }
}
