import { productsConstants } from '../constants/productsConstants';

const initialState = {};

const products = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case productsConstants.SET: {
            const { products } = action
            return {
                ...state,
                products
            };
        }
        case productsConstants.ADD: {
            const { product } = action
            const { products } = state
            return {
                ...state,
                products: [...products, product]
            };
        }
        case productsConstants.EDIT: {
            const { product } = action
            const { products } = state
            const editedProducts = products.map((item) => item.id === product.id ? product : item)
            return {
                ...state,
                products: editedProducts
            };
        }
        case productsConstants.DELETE: {
            const { product } = action
            const { products } = state
            const newProducts = products.filter((item) => item.id !== product.id)
            return {
                ...state,
                products: newProducts
            };
        }
        default:
            return state
    }
}

export default products