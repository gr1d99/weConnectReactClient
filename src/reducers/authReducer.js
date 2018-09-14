import {
    LOGIN_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
    isAuthenticated: false,
};

export default function loginReducer(
    state = initialState,
    action
    ) {
    switch (action.type){
        case LOGIN_SUCCESS:
            return Object.assign(
                {},
                state,
                { isAuthenticated: true }
            );

        default:
            return state;
    }
}
