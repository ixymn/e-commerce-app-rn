/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginPage from '../pages/LoginPage';

class LoginContainer extends Component {
    render() {
        return (
            <LoginPage {...this.props} />
        )
    }
}

export default connect((state) => {
    const { userReducer } = state;
    return {
        userReducer
    }
})(LoginContainer);