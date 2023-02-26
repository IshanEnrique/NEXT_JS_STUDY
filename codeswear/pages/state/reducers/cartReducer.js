const product = {
    productCode: "saree-0001",
    qty: 1,
    price: 1499,
    name: "Saree",
    size: "M",
    vairant: "Red",
    sources: [{
        imgSize: "100x50",
        imgUrl: "/images/saree/saree1.jpg"
    },
    {
        imgSize: "100x50",
        imgUrl: "/images/saree/saree1.jpg"
    }]
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
            let isLast = newState.cart[indexVal].qty === 1;
            newState.cart[indexVal].qty -= 1;
            if (isLast) {
                return {
                    ...newState,
                    cart: newState.cart.filter((c) => c.productCode !== itemCode)
                }
            }

            break;


        default:
            newState;
    }
    return newState;

}
export default cartReducer;