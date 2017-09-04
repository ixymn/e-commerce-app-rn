/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import * as types from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    user: {},
    status: null,
}

let myReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default myReducer;