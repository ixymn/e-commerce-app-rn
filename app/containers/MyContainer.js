/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyPage from '../pages/MyPage';

class MyContainer extends Component {
    render() {
        return (
            <MyPage {...this.props} />
        )
    }
}

export default connect((state) => {
    return { userReducer } = state;
})(MyContainer);