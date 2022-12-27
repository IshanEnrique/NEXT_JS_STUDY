// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const connectToMongo = require('../../db');
const express = require('express');
const router = express.Router();
connectToMongo();
type Data = {
  name: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'This is homepage' })
}
