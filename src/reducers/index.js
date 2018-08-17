import { combineReducers } from 'redux';
import auth from './authReducer';
import messages from './messagesReducer';

const rootReducer = combineReducers({
    auth,
    messages
});

export default rootReducer;
