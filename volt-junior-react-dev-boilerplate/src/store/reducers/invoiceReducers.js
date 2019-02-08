import { invoiceConstants } from '../constants/invoiceConstants';

const initialState = {};

const invoice = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case invoiceConstants.SET: {
            const { invoice } = action
            return {
                ...state,
                invoice
            };
        }
        case invoiceConstants.EDIT: {
            const { invoice } = action
            const { invoices } = state
            const editedInvoices = invoices.map((item) => item.id === invoice.id ? invoice : item)
            return {
                ...state,
                invoices: editedInvoices
            };
        }
        default:
            return state
    }
}

export default invoice