import path from 'path';
import { promises as fs } from 'fs';


export default async function handler(req, res) {

  const {
    query: { id },
    method,
  } = req;

 
  switch (method) {
    case 'GET':
      // handle GET request
      const jsonDirectory = path.join(process.cwd(), 'public/resources');

      const allTshirts = await fs.readFile( jsonDirectory+'/products.json', 'utf8');
      const products=await JSON.parse(allTshirts);
      res.status(200).json(products.filter(item=>item.productCode===id)[0])
      break;
    // case 'PUT':
    //   // handle PUT request
    //   res.status(200).json({ message: `Updated item with ID ${id}` });
    //   break;
    // case 'DELETE':
    //   // handle DELETE request
    //   res.status(200).json({ message: `Deleted item with ID ${id}` });
    //   break;
    default:
      res.setHeader('Allow', ['GET'
      // , 'PUT', 'DELETE'
    ]);
      res.status(405).end(`Method ${method} not allowed`);
  }


}

