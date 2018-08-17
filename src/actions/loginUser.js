import axios from 'axios';
import { authenticateUser } from '../lib/authentication';
import { API_URL } from '../constants/Api';
import {clearLoginError, loginError} from './errorHandlers';
import {clearLoginSuccessMessage, loginSuccess} from './successHandlers';

const loginUser = (email, password) => {
    return function (dispatch) {
        const url = `${API_URL}/login`;

        return axios.post(
            url,
            {
                email: email,
                password: password
            }
        ).then(
            (response) => {
                const jwt_token = response.data.auth_token;
                authenticateUser(jwt_token);
                dispatch(clearLoginError());
                dispatch(loginSuccess())
            }
        ).catch(
            (error) => {
                const error_message = error.response.data.message;
                dispatch(clearLoginSuccessMessage());
                dispatch(loginError(error_message))
            }
        )
    }
};

export default loginUser;
