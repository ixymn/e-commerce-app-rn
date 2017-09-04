/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import * as types from './actionTypes';
import Util from '../common/utils';
import * as urls from '../common/constants_url';

export let articleView = (id)=> {
    let url = urls.kUrlArticleView + id;

    return dispatch => {
        dispatch({type: types.kArticleView});
        return Util.get(url,
            (status, code, message, data, share) => {
                let article = [];
                if (status) {
                    article = data.article;
                }
                dispatch({type:types.kArticleViewReceived, status:status, code:code, message:message, share:share, article:article});
            },
            (error) => {
                // console.log('Fetch banner list error: ' + error);
                dispatch({'type': types.kActionError});
            }
        );
    }
};