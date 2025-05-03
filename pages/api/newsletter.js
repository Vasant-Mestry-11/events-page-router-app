import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address",
      });
      return;
    }

    const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);

    const db = client.db("events");

    await db.collection("newsletter").insertOne({
      email,
    });

    client.close();

    return res.status(201).json({
      message: "Email added successfully",
    });
  }
}
