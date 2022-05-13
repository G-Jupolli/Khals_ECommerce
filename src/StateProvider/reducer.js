export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}

const reducer = (state, action) => {

    console.log(action)

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

        default:
            return state
    }

};

export default reducer;