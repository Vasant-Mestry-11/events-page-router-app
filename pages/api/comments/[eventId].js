export default function handler(req, res) {
  if (res.method === "POST") {
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
        message: 'Invalid input'
      })
      return
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      comment
    }
    res.status(200).json({
      message: "Success",
      comment: newComment
    });
  }

  if (req.method === 'GET')
  {
    res.status(200).json({
      message: "THis is event specific req",
    });
  }
}
