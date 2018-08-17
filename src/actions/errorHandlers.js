import {CLEAR_LOGIN_ERROR_MESSAGE, LOGIN_ERROR} from "../constants/ActionTypes";

export function loginError(login_error_message) {
    return {
        type: LOGIN_ERROR,
        login_error_message
    }
}

export function clearLoginError() {
    return {
        type: CLEAR_LOGIN_ERROR_MESSAGE
    }
}
