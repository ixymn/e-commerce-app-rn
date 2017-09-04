/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-09-24
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FunPage from '../pages/FunPage';

class FunContainer extends Component {
    render() {
        return (
            <FunPage {...this.props} />
        )
    }
}

export default connect((state) => {
    return { userReducer } = state;
})(FunContainer);