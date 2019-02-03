import { customersConstants } from '../constants/customersConstants';

const initialState = {};

const customers = (state = initialState, action = {
    type: null
}) => {
    switch (action.type) {
        case customersConstants.SET:
            const { customers } = action
            return {
                ...state,
                customers
            };
        default:
            return state
    }
}

export default customers