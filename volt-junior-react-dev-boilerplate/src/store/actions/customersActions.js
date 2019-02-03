import { customersConstants } from '../constants/customersConstants';
import _ from 'lodash'
import { fetchThenProcess } from '../fetcher';

export function getCustomers() {
    return dispatch => {
        fetchThenProcess('/api/customers', 'GET')
            .then((response) => {
                dispatch(setCustomers(response))
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

const setCustomers = (customers = []) => {
    return {
        type: customersConstants.SET,
        customers
    }
}