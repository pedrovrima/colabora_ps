import { prisma } from "../../../db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function createSale(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("hi");
  const { seller } = req.body;
  try {
    await prisma.seller.create({
      data: { ...seller },
    });
    res.send(200);
  } catch (e) {
    console.log(e);
    res.send(500)
  }
}
