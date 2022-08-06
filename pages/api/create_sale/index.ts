import { prisma } from "../../../db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default function createSale(req: NextApiRequest, res: NextApiResponse) {
  console.log("hi")
    const { sale } = req.body;

  prisma.sales.create({
    data: { ...sale, productSales: { create: sale.productSales } },
  });
  res.send(200)
}
