import dotenv from "dotenv";
import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "@/helpers/dbUtils";

dotenv.config();

export default async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to database" });
    return;
  }

  if (req.method === "POST") {
    const { eventId } = req.query;

    const { email, name, comment } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !comment ||
      !comment.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid input",
      });
      client.close();
      return
    }

    const newComment = {
      email,
      name,
      comment,
      eventId,
    };

    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      console.log(result)
      newComment._id = result.insertedId;
      res.status(201).json({
        message: "Success",
        comment: newComment,
      });

    } catch (error) {
      res.status(500).json({
        message: "Inserting comment failed",
      });
    }
  }

  if (req.method === "GET") {
    try {
      const comments = await getAllDocuments(client, "comments", { _id: -1 });
      console.log(comments)
      res.status(200).json({
        message: "Success",
        comments,
      });
    } catch (error) {
      res.status(500).json({
        message: "Getting comments failed",
      });
    }
  }

  client.close();
}
