import { connectDatabase } from "@/helpers/dbUtils";
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
      await insertDocument(client, 'newsletter', { email })
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
