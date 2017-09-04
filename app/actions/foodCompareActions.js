/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import * as types from './actionTypes';

export let clearCompareFood = (position)=> {
    return {
        type: types.CLEAR_COMPARE_FOOD,
        position: position
    }
}

export let resetState = ()=> {
    return { type: types.FOOD_COMPARE_RESET_STATE }
}