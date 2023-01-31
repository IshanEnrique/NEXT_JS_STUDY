const product = {
    productCode: "t-shirt-0001",
    qty: 1,
    price: 499,
    name: "T-Shirts",
    size: "M",
    vairant: "Black"
}

const defaultCart = {
    cart: [product]
}
const cartReducer = (state = defaultCart, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "addToCart":
            const { productCode, qty, price, name, size, vairant } = action.payload;
            let ifExists = false;
            let indexValue = 0;
            newState.cart.forEach((data, index) => {
                if (data.productCode == productCode) {
                    ifExists = true;
                    indexValue = index
                }
            })
            if (ifExists) {
                newState.cart[indexValue].qty = newState.cart[indexValue].qty + qty;
            } else {
                return {
                    ...newState,
                    cart: [...newState.cart,
                    { productCode, qty, price, name, size, vairant }
                    ]
                }
            }
            break;
        case "removeFromCart":
            const itemCode = action.payload.productCode;
            let ifExist = false;
            let indexVal = 0;
            newState.cart.forEach((data, index) => {
                if (data.productCode == itemCode) {
                    ifExist = true;
                    indexVal = index;
                }
            })
            let isLast= newState.cart[indexVal].qty===1;
            newState.cart[indexVal].qty -= 1;
            if(isLast){
              return  {
                    ...newState,
                    cart: newState.cart.filter((c)=> c.productCode!==itemCode)
                }
            }
            
            break;


        default:
            newState;
    }
    return newState;

}
export default cartReducer;