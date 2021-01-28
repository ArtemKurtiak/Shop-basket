
const ADD_PRODUCT = 'ADD_PRODUCT';

let initialState = {
    productsInBasket: []
}
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                productsInBasket: [...state.productsInBasket, {
                    id: action.payload.id,
                    src: action.payload.src,
                    name: action.payload.name,
                    price: action.payload.price
                }]
            }
        }
        default:
            return state;
    }
    return state
}

export const addProduct = (id, src, name, price) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            id,
            src,
            name,
            price
        }
    }

}


export default productsReducer