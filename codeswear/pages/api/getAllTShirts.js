

  

 


export default async function handler(
    req,
    res
  ) {
    
      
      
      let allTshirts=[];
      for(let i=0;i<20;i++){
        let tshirt={
          href:"/product/wear-the-code",
          imgUrl:"https://m.media-amazon.com/images/I/71sGfOZcpwL._UY879_.jpg",
          price:499,
          productCode:"T-Shirt-",
          name: "T-Shirts",
          size: ["S", "M", "L", "XL", "XXL"],
          vairant: ["Black"]
        }
        tshirt.productCode=tshirt.productCode+i;
        allTshirts.push(tshirt);
      }
    res.status(200).json(allTshirts)
  }
  