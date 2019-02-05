import { customersConstants } from '../constants/customersConstants';
import _ from 'lodash'
import { fetchThenProcess } from '../fetcher';

export function getCustomers() {
    return dispatch => {
        fetchThenProcess('/api/customers', 'GET')
            .then((response) => dispatch(setCustomers(response)))
    };

    function setCustomers(customers = []) {
        return {
            type: customersConstants.SET,
            customers
        }
    }
}

export function createCustomer(customer) {
    return dispatch => {
        fetchThenProcess('/api/customers', 'POST', JSON.stringify(customer))
            .then((response) => dispatch(addCustomer(response)))
    };

    function addCustomer(customer) {
        return {
            type: customersConstants.ADD,
            customer
        }
    }
}

export function editCustomer(customer) {
    return dispatch => {
        fetchThenProcess(`/api/customers/${customer.id}`, 'PUT', JSON.stringify(customer))
            .then((response) => dispatch(editCustomer(response)))
    };

    function editCustomer(customer) {
        return {
            type: customersConstants.EDIT,
            customer
        }
    }
}

export function deleteCustomer(customer) {
    return dispatch => {
        fetchThenProcess(`/api/customers/${customer.id}`, 'DELETE', JSON.stringify(customer))
            .then((response) => dispatch(deleteCustomer(response)))
    };

    function deleteCustomer(customer) {
        return {
            type: customersConstants.DELETE,
            customer
        }
    }
}