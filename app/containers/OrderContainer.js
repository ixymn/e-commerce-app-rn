/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-09-27
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderPage from '../pages/OrderPage';

class OrderContainer extends Component {
    render() {
        return (
            <OrderPage {...this.props} />
        )
    }
}

export default connect((state) => {
    return { orderReducer, userReducer, commonReducer} = state;
})(OrderContainer);