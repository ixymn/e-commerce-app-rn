/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArticlePage from '../pages/ArticlePage';

class ArticleContainer extends Component {
    render() {
        return (
            <ArticlePage {...this.props} />
        )
    }
}

export default connect((state) => {
    const { articleReducer } = state;
    return {
        articleReducer
    }
})(ArticleContainer);