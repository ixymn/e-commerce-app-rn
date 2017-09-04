/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-09-11
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartPage from '../pages/CartPage';

class CartContainer extends Component {
    render() {
        return (
            <CartPage {...this.props} />
        )
    }
}

export default connect((state) => {
    return { cartReducer, userReducer, preorderReducer } = state;
})(CartContainer);