import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  req,
  res
) {

  
  const jsonDirectory = path.join(process.cwd(), 'public/resources');

  const allTshirts = await fs.readFile( jsonDirectory+'/products.json', 'utf8');
  const products=await JSON.parse(allTshirts);
  res.status(200).json(products)
}

