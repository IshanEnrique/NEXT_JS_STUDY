const product={
    productCode: "t-shirt-0001",
    qty: 1,
    price: 499,
    name: "T-Shirts",
    size: "M",
    vairant: "Black"
}

const defaultCart={
    cart:[product]
}
const cartReducer=(state = defaultCart,action)=>{
    const newState={...state};
    
    switch(action.type){
        case "addToCart":
          const  {productCode,qty,price,name,size,vairant}=action.payload;          
            let ifExists=false;
            let indexValue=0;
            newState.cart.forEach((data,index)=>{
                if(data.productCode==productCode)
                {
                    ifExists=true;
                    indexValue=index
                }
            })
            if(ifExists){
                console.log("inside cart List >>>> product is present : "+JSON.stringify(newState.cart[indexValue]))
                newState.cart[indexValue].qty=newState.cart[indexValue].qty+qty;
            }else{
                console.log("inside cart List >>>> product is not present : ")
                return {
                    ... newState,
                    cart:[...newState.cart,
                        {productCode,qty,price,name,size,vairant}
                    ]
                }
            }
        break;
        case "removeFromCart":
            
        break;
       
        default:
        newState;
    }
    return newState;
    
}
export default cartReducer;