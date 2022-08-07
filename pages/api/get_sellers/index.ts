import { prisma } from "../../../db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getSellers(req: NextApiRequest, res: NextApiResponse) {
  const {where} = req.body
  try{
  const sellers = await prisma.seller.findMany({where});
  res.status(200).json(sellers);}catch(e){
    console.log(e)
    res.send(500)
  }
}
