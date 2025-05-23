import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);

  const db = client.db("events");

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
    }

    const newComment = {
      email,
      name,
      comment,
      eventId,
    };

    const result = await db.collection("comments").insertOne(newComment);

    newComment.id = result.insertedId;

    res.status(201).json({
      message: "Success",
      comment: newComment,
    });
  }

  if (req.method === "GET") {
    const comments = await db
      .collection("comments")
      .find()
      .sort({
        _id: -1,
      })
      .toArray();

    res.status(200).json({
      message: "Success",
      comments: comments,
    });
  }

  client.close();
}
