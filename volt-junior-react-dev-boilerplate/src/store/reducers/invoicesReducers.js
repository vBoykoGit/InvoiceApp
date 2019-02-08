import { invoicesConstants } from '../constants/invoicesConstants';

const initialState = {};

const invoices = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case invoicesConstants.SET: {
            const { invoices } = action
            return {
                ...state,
                invoices
            };
        }
        case invoicesConstants.ADD: {
            const { invoice } = action
            const { invoices } = state

            const newInvoices = invoices ? [...invoices, invoice] : [invoice]
            return {
                ...state,
                invoices: newInvoices
            };
        }
        case invoicesConstants.EDIT: {
            const { invoice } = action
            const { invoices } = state
            const editedInvoices = invoices.map((item) => item.id === invoice.id ? invoice : item)
            return {
                ...state,
                invoices: editedInvoices
            };
        }
        case invoicesConstants.DELETE: {
            const { invoice } = action
            const { invoices } = state
            const newInvoices = invoices.filter((item) => item.id !== invoice.id)
            return {
                ...state,
                invoices: newInvoices
            };
        }
        default:
            return state
    }
}

export default invoices