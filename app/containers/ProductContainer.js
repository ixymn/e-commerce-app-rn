/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductPage from '../pages/ProductPage';

class ProductContainer extends Component {
    render() {
        return (
            <ProductPage {...this.props} />
        )
    }
}

export default connect((state) => {
    const { productReducer, userReducer, cartReducer } = state;
    return { productReducer, userReducer, cartReducer };
})(ProductContainer);