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
    isLoading: true,
};

let categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.kCategoryListWithProduct:
            return {
                ...state
            };
        case types.kCategoryListWithProductReceived:
            // Alert.alert(action.categories);
            return {
                ...state,
                categories: action.categories,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default categoryReducer;