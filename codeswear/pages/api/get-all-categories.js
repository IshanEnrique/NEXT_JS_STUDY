import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  req,
  res
) {

  
  const jsonDirectory = path.join(process.cwd(), 'public/resources');

  const allCategories = await fs.readFile( jsonDirectory+'/categories.json', 'utf8');
  const products=await JSON.parse(allCategories);
  res.status(200).json(products)
}

