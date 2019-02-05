import { customersConstants } from '../constants/customersConstants';

const initialState = {};

const customers = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case customersConstants.SET: {
            const { customers } = action
            return {
                ...state,
                customers
            };
        }
        case customersConstants.ADD: {
            const { customer } = action
            const { customers } = state

            return {
                ...state,
                customers: [...customers, customer]
            };
        }
        case customersConstants.EDIT: {
            const { customer } = action
            const { customers } = state
            const editedCustomers = customers.map((item) => item.id === customer.id ? customer : item)
            return {
                ...state,
                customers: editedCustomers
            };
        }
        case customersConstants.DELETE: {
            const { customer } = action
            const { customers } = state
            const newCustomers = customers.filter((item) => item.id !== customer.id)
            return {
                ...state,
                customers: newCustomers
            };
        }
        default:
            return state
    }
}

export default customers