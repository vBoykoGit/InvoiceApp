import _ from 'lodash'
import { fetchThenProcess } from '../fetcher';
import { invoiceConstants } from '../constants/invoiceConstants';

export function getInvoice(id) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${id}`, 'GET')
            .then((response) => dispatch(setInvoice(response)))
    };
}

export function editInvoice(invoice) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoice.id}`, 'PUT', JSON.stringify(invoice))
            .then((response) => dispatch(setInvoice(response)))
    };
}

export function getInvoiceItems(id) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${id}/items`, 'GET')
            .then((response) => dispatch(setInvoiceItems(response)))
    };
}

export function addProductItem(invoice, product) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoice.id}/items`, 'POST', JSON.stringify({
            invoice_id: invoice.id,
            product_id: product.id
        })).then((response) => dispatch(addProductItem(response)))
    };

    function addProductItem(item) {
        return {
            type: invoiceConstants.ADD_PRODUCT_ITEM,
            item
        }
    }
}

export function changeItemQuantity(item) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${item.invoice_id}/items/${item.id}`, 'PUT', JSON.stringify(item))
            .then((response) => dispatch(setInvoiceItem(response)))
    };
}

export function deleteInvoiceItem(item) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${item.invoice_id}/items/${item.id}`, 'DELETE')
            .then((response) => dispatch(deleteInvoiceItem(response)))
    };

    function deleteInvoiceItem(item) {
        return {
            type: invoiceConstants.DELETE_PRODUCT_ITEM,
            item
        }
    }
}

function setInvoiceItems(items) {
    return {
        type: invoiceConstants.SET_PRODUCT_ITEMS,
        items
    }
}

function setInvoiceItem(item) {
    return {
        type: invoiceConstants.SET_PRODUCT_ITEM,
        item
    }
}

function setInvoice(invoice) {
    return {
        type: invoiceConstants.SET_INVOICE,
        invoice
    }
}