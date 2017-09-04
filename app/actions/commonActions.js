/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-09-24
 

 * @license The MIT License (MIT)
 */

import * as types from './actionTypes';

/**
 * 公共的actions
 */

export let commonIsToasting = (isToasting) => {
    return (dispatch) => {
        dispatch({type:types.kCommonIsToasting, isToasting:isToasting});
    }
};