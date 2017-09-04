/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-09-23
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PreorderPage from '../pages/PreorderPage';

class PreorderContainer extends Component {
    render() {
        return (
            <PreorderPage {...this.props} />
        )
    }
}

export default connect((state) => {
    return { preorderReducer, orderReducer, userReducer, commonReducer} = state;
})(PreorderContainer);