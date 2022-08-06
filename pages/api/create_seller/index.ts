import { prisma } from "../../../db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default function createSale(req: NextApiRequest, res: NextApiResponse) {
  console.log("hi")
    const { seller } = req.body;

  prisma.seller.create({
    data: { ...seller },
  });
  res.send(200)
}
