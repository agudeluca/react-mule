import { combineReducers } from 'redux';

import {applicationStore} from './applicationStore'

const rootReducer = combineReducers({
    applicationStore
});

export default rootReducer;