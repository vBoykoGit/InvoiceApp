import { productsConstants } from '../constants/productsConstants';

const initialState = {};

const products = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case productsConstants.SET:
            const { products } = action
            return {
                ...state,
                products
            };
        default:
            return state
    }
}

export default products