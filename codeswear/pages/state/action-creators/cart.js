export const addToCart = (productCode,qty,price,name,size,vairant) => {
    
    return (dispatch) => {
        dispatch({
            type: "addToCart",
            payload: {
                productCode,
                qty,
                price,
                name,
                size,
                vairant
            }
        })
    }
}
export const removeFromCart = (productCode) => {
    return (dispatch) => {
        dispatch({
            type: "removeFromCart",
            payload: {
                productCode                
            }
        })
    }
}