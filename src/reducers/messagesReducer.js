import {
    CLEAR_LOGIN_ERROR_MESSAGE,
    CLEAR_LOGIN_SUCCESS_MESSAGE,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../constants/ActionTypes';
import {LOGIN_SUCCESS_MESSAGE} from '../constants/Messages';

const initialState = {
    login: {
        login_error_message: "",
        login_success_message: ""
    }
};

export default function errorsReduce(
    state = initialState,
    action
){
    switch (action.type){
        case CLEAR_LOGIN_ERROR_MESSAGE:
            return Object.assign({},
                state,
                {
                    login: {
                        ...state.login,
                        login_error_message: ""
                    }
                }
            );

        case CLEAR_LOGIN_SUCCESS_MESSAGE:
            return Object.assign(
                {},
                state,
                {
                    login: {
                        ...state.login,
                        login_success_message: ""
                    }
                }
            );

        case LOGIN_ERROR:
            return Object.assign(
                {},
                state,
                {
                    login: {
                        ...state.login,
                        login_error_message: action.login_error_message
                    }
                }
            );

        case LOGIN_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    login: {
                        ...state.login,
                        login_success_message: LOGIN_SUCCESS_MESSAGE
                    }
                }
            );

        default:
            return state;
    }
}
