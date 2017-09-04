/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import RegisterPage from '../pages/RegisterPage';

class RegisterContainer extends Component {
    render() {
        return (
            <RegisterPage {...this.props} />
        )
    }
}

export default connect((state) => {
    const { userReducer } = state;
    return {
        userReducer
    }
})(RegisterContainer);