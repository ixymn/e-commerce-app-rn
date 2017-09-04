/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CategoryPage from '../pages/CategoryPage';

class CategoryContainer extends Component {
    render() {
        return (
            <CategoryPage {...this.props} />
        )
    }
}

export default connect((state) => {
    const { categoryReducer } = state;
    return {
        categoryReducer
    }
})(CategoryContainer);