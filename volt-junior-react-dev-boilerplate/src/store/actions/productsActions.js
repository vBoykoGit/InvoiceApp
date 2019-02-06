import _ from 'lodash'
import { fetchThenProcess } from '../fetcher';
import { productsConstants } from '../constants/productsConstants';

export function getProducts() {
    return dispatch => {
        fetchThenProcess('/api/products', 'GET')
            .then((response) => {
                dispatch(setProducts(response))
            })
    };

    function setProducts(products = []) {
        return {
            type: productsConstants.SET,
            products
        }
    }
}


export function createProduct(product) {
    return dispatch => {
        fetchThenProcess('/api/products', 'POST', JSON.stringify(product))
            .then((response) => dispatch(addProduct(response)))
    };

    function addProduct(product) {
        return {
            type: productsConstants.ADD,
            product
        }
    }
}

export function editProduct(product) {
    return dispatch => {
        fetchThenProcess(`/api/products/${product.id}`, 'PUT', JSON.stringify(product))
            .then((response) => dispatch(editProduct(response)))
    };

    function editProduct(product) {
        return {
            type: productsConstants.EDIT,
            product
        }
    }
}

export function deleteProduct(product) {
    return dispatch => {
        fetchThenProcess(`/api/products/${product.id}`, 'DELETE', JSON.stringify(product))
            .then((response) => dispatch(deleteProduct(response)))
    };

    function deleteProduct(product) {
        return {
            type: productsConstants.DELETE,
            product
        }
    }
}