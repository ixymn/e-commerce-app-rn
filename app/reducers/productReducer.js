/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import * as types from '../actions/actionTypes';
import {Alert} from 'react-native';

const initialState = {
    categories: [],
    product: {},
    isLoading: true,
};

let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.kProductView:
            // alert(1);
            return {
                ...state,
                isLoading: true,
            };
        case types.kProductViewReceived:
            return {
                ...state,
                ...action,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default productReducer;