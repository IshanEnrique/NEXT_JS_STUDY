const defaultCart={
    productCode: "t-shirt-0001",
    qty: 1,
    price: 499,
    name: "T-Shirts",
    size: "M",
    vairant: "Black"
}
const cartReducer=(cart=defaultCart,action)=>{
    if(action.type=="addToCart"){
        let newCart=cart;
        let newItemCode=action.payload.productCode;
        if(newItemCode in cart){
            newCart[newItemCode].qty=cart[newItemCode].qty+action.payload.qty;
        }else{
            newCart[newItemCode]=action.payload;
        }
        return newCart;
    }else if (action.type=="removeFromCart"){

        let newCart=cart;
        let newItemCode=action.payload.productCode;
        if(newItemCode in cart){
            newCart[newItemCode].qty=cart[newItemCode].qty-action.payload.qty;
        }
        if(newCart[newItemCode].qty<=0){
            delete newCart[newItemCode];
        }
        return newCart;
    
    }else{
        return cart;
    }
}
export default cartReducer;