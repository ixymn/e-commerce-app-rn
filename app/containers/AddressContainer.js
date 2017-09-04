/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-09-24
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddressPage from '../pages/AddressPage';

class AddressContainer extends Component {
    render() {
        return (
            <AddressPage {...this.props} />
        )
    }
}

export default connect((state) => {
    return { addressReducer, userReducer} = state;
})(AddressContainer);