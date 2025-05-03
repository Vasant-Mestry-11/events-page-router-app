import { MongoClient } from "mongodb";

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({
        message: 'Invalid email address'
      })
      return
    }

    const client = await MongoClient.connect(
      'mongodb+srv://vasantmestry11:tCHMYNZdKhd52IfL@cluster0.fmz53zz.mongodb.net'
    )

    const db = client.db('newsletter');

    await db.collection('emails').insertOne({
      email
    })

    client.close()

    return res.status(201).json({
      message: 'Email added successfully',
    })
  }
}