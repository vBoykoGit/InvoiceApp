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

export function createInvoices(invoices) {
    return dispatch => {
        fetchThenProcess('/api/invoices', 'POST', JSON.stringify(invoices))
            .then((response) => dispatch(addInvoices(response)))
    };

    function addInvoices(invoices) {
        return {
            type: invoicesConstants.ADD,
            invoices
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

export function deleteInvoices(invoices) {
    return dispatch => {
        fetchThenProcess(`/api/invoices/${invoices.id}`, 'DELETE', JSON.stringify(invoices))
            .then((response) => dispatch(deleteInvoices(response)))
    };

    function deleteInvoices(invoices) {
        return {
            type: invoicesConstants.DELETE,
            invoices
        }
    }
}