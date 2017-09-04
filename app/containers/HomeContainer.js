/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomePage from '../pages/HomePage';

class HomeContainer extends Component {
    render() {
        return (
            <HomePage {...this.props} />
        )
    }
}

export default connect((state) => {
    return { homeReducer, cartReducer, userReducer } = state;
})(HomeContainer);