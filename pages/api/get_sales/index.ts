import { prisma } from "../../../db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getSellers(req: NextApiRequest, res: NextApiResponse) {
  const {where} = req.body
  try{
  const sales = await prisma.sales.findMany({where,include:{productSales: {include:{seller: true}}}});
  res.status(200).json(sales);}catch(e){
    console.log(e)
    res.send(500)
  }
}
