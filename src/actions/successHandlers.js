import {
    CLEAR_LOGIN_SUCCESS_MESSAGE,
    LOGIN_SUCCESS
} from '../constants/ActionTypes';
import {
    LOGIN_SUCCESS_MESSAGE
} from '../constants/Messages';

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS,
        login_success_message: LOGIN_SUCCESS_MESSAGE
    }
}

export function clearLoginSuccessMessage() {
    return {
        type: CLEAR_LOGIN_SUCCESS_MESSAGE
    }
}
