import { invoiceConstants } from '../constants/invoiceConstants';

const initialState = {};

const invoice = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case invoiceConstants.SET_INVOICE: {
            const { invoice } = action
            return {
                ...state,
                invoice
            };
        }
        case invoiceConstants.SET_PRODUCT_ITEMS: {
            const { items } = action
            return {
                ...state,
                items
            };
        }
        case invoiceConstants.ADD_PRODUCT_ITEM: {
            const { item } = action
            const { items } = state
            const newItems = items ? [...items, item] : [item]
            return {
                ...state,
                items: newItems
            };
        }
        case invoiceConstants.DELETE_PRODUCT_ITEM: {
            const { item } = action
            const { items } = state
            const newItems = items.filter(i => i.id !== item.id)
            return {
                ...state,
                items: newItems
            };
        }
        default:
            return state
    }
}

export default invoice