export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => {
    const amount =  basket?.reduce((amount, item) => item.price + amount, 0);
    return amount;
}

const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((item) => item.id === action.payload);
            let newBasket = [...state.basket];

            if (index < 0 ) {
                console.warn(`Item not found in basket`);
                return;
            }

            newBasket.splice(index, 1);

            return {
                ...state,
                basket: newBasket,
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            }

        default:
            return state
    }

};

export default reducer;