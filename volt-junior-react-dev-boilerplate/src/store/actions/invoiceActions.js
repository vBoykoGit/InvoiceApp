import _ from 'lodash'
import { fetchThenProcess } from '../fetcher';
import { invoiceConstants } from '../constants/invoiceConstants';

export function getInvoice(id) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${id}`, 'GET')
            .then((response) => dispatch(setInvoice(response)))
    };

    function setInvoice(invoice) {
        return {
            type: invoiceConstants.SET_INVOICE,
            invoice
        }
    }
}

export function editInvoice(invoice) {
    return (dispatch, getState) => {
        fetchThenProcess(`/api/invoices/${invoice.id}`, 'PUT', JSON.stringify(invoice))
            .then((response) => dispatch(setInvoice(response)))
    };

    function setInvoice(invoice) {
        return {
            type: invoiceConstants.SET_INVOICE,
            invoice
        }
    }
}

export function getInvoiceItems(id) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${id}/items`, 'GET')
            .then((response) => dispatch(setInvoiceItems(response)))
    };

    function setInvoiceItems(items) {
        return {
            type: invoiceConstants.SET_PRODUCT_ITEMS,
            items
        }
    }
}

export function addProductItem(invoice, product) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoice.id}/items`, 'POST', JSON.stringify({
            invoice_id: invoice.id,
            product_id: product.id
        })).then((response) => dispatch(addProductItem(invoice, response)))
    };

    function addProductItem(invoice, item) {
        return {
            type: invoiceConstants.ADD_PRODUCT_ITEM,
            item
        }
    }
}

export function deleteInvoiceItem(invoice, item) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoice.id}/items/${item.id}`, 'DELETE')
            .then((response) => dispatch(deleteInvoiceItem(response)))
    };

    function deleteInvoiceItem(item) {
        return {
            type: invoiceConstants.DELETE_PRODUCT_ITEM,
            item
        }
    }
}