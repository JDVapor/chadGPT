// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDb } from "../../firebaseAdmin";
import query from "../../lib/queryApi";
import admin from "firebase-admin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "I need a prompt, bruh!" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Need a valid chad ID" });
    return;
  }

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "chadGPT doesn't have an answer for that, my guy!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "chadGPT",
      name: "chadGPT",
      avatar:
        "https://cdn.shopify.com/s/files/1/0120/0692/products/mockup-cf3fd80f_5000x.jpg?v=1601318189",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
 