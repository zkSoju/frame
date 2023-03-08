import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ name: "John Doe" });
      break;
    case "POST":
      // Update or create data in your database
      res.status(200).json({ name: "John Doe" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
