/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import * as types from '../actions/actionTypes';
const initialState = {
    article: [],
    isLoading: true,
};

let articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.kArticleView:
            return {
                ...state,
                isLoading: true,
            };
        case types.kArticleViewReceived:
            return {
                ...state,
                article: action.article,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default articleReducer;