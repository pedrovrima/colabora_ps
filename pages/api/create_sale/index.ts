import { prisma } from "../../../db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function createSale(req: NextApiRequest, res: NextApiResponse) {
  console.log("hi")
    const { sale } = req.body;
try{
  await prisma.sales.create({
    data: { ...sale, productSales: { create: sale.productSales } },
  });
  res.send(200)}catch(e){
    console.log(e)
    res.send(500)
  }
}
