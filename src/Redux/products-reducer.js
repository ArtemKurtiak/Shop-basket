const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

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
        case DELETE_PRODUCT: {
            return {...state, productsInBasket: state.productsInBasket.filter(el => el.id !== action.payload.id)}

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
export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            id
        }
    }

}


export default productsReducer