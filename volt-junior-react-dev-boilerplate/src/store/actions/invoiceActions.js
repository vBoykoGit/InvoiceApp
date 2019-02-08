import _ from 'lodash'
import { fetchThenProcess } from '../fetcher';
import { invoiceConstants } from '../constants/invoiceConstants';

export function editInvoices(invoices) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoices.id}`, 'PUT', JSON.stringify(invoices))
            .then((response) => dispatch(editInvoices(response)))
    };

    function editInvoices(invoices) {
        return {
            type: invoiceConstants.EDIT,
            invoices
        }
    }
}

export function addInvoiceItem(productID) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoices.id}/items`, 'PUT', JSON.stringify(invoices))
            .then((response) => dispatch(editInvoices(response)))
    };

    function editInvoices(invoices) {
        return {
            type: invoiceConstants.EDIT,
            invoices
        }
    }
}