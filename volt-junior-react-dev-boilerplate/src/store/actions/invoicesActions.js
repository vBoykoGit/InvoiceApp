import _ from 'lodash'
import { fetchThenProcess } from '../fetcher';
import { invoicesConstants } from '../constants/invoicesConstants';

export function getInvoices() {
    return dispatch => {
        fetchThenProcess('/api/invoices', 'GET')
            .then((response) => dispatch(setInvoices(response)))
    };

    function setInvoices(invoices = []) {
        return {
            type: invoicesConstants.SET,
            invoices
        }
    }
}

export function createInvoice() {
    return dispatch => {
        fetchThenProcess('/api/invoices', 'POST')
            .then((response) => dispatch(addInvoice(response)))
    };

    function addInvoice(invoice) {
        return {
            type: invoicesConstants.ADD,
            invoice
        }
    }
}

export function editInvoices(invoices) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoices.id}`, 'PUT', JSON.stringify(invoices))
            .then((response) => dispatch(editInvoices(response)))
    };

    function editInvoices(invoices) {
        return {
            type: invoicesConstants.EDIT,
            invoices
        }
    }
}

export function deleteInvoice(invoice) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoice.id}`, 'DELETE')
            .then((response) => dispatch(deleteInvoices(response)))
    };

    function deleteInvoices(invoice) {
        return {
            type: invoicesConstants.DELETE,
            invoice
        }
    }
}