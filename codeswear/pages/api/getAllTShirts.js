export default function handler(
    req,
    res
  ) {
    let tshirt={
        href:"/product/wear-the-code",
        imgUrl:"https://m.media-amazon.com/images/I/71sGfOZcpwL._UY879_.jpg",
        price:499,
        productCode:"t-shirt-0001",
        name: "T-Shirts",
        size: ["S", "M", "L", "XL", "XXL"],
        vairant: ["Black"]
    }

    let allTshirts=[];
    for(let i=0;i<20;i++){
        allTshirts.push(tshirt);
    }
    res.status(200).json(allTshirts)
  }
  