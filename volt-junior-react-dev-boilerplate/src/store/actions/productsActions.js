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
}

// export function newOperation(sum) {
//     return async dispatch => {
//         console.log(sum);

//         dispatch(startLoading())
//         fetchThenProcess('/addOperation', 'POST', JSON.stringify({
//             sum,
//             date: new Date()
//         })).then((response) => {
//             parseAndHandleOperations(response, dispatch)
//             dispatch(finishLoading())
//         })
//     };
// }

const setProducts = (products = []) => ({
    type: productsConstants.SET,
    products
})