/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-09-23
 

 * @license The MIT License (MIT)
 */

import * as types from '../actions/actionTypes';

const initialState = {
    preorder: {},
    address: {},
    isLoading: true,
    isPreorderCreating: false, //预订单是否在创建中
    isTurnToPreorderView: false, //是否转向预订单查看页
};

let preorderReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.kPreorderCreate:
            return {
                ...state,
                isLoading: true,
                isPreorderCreating: true,
                isTurnToPreorderView: false,
            };
        case types.kPreorderCreateReceived:
            return {
                ...state,
                ...action,
                isLoading: false,
                isPreorderCreating: false,
                isTurnToPreorderView: true,
            };
        case types.kPreorderIsTurnedToViewFromSync:
            return {
                ...state,
                isLoading: true,
                isPreorderCreating: false,
                isTurnToPreorderView: false,
            };
        case types.kPreorderView:
            return {
                ...state,
                isLoading: true,
                isPreorderCreating: false,
                isTurnToPreorderView: false,
            };
        case types.kPreorderViewReceived:
            return {
                ...state,
                ...action,
                isLoading: false,
                isPreorderCreating: false,
                isTurnToPreorderView: false,
            };
        default:
            return state;
    }
};

export default preorderReducer;