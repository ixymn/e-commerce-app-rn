/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-09-25
 

 * @license The MIT License (MIT)
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddressCreatePage from '../pages/AddressCreatePage';

class AddressCreateContainer extends Component {
    render() {
        return (
            <AddressCreatePage {...this.props} />
        )
    }
}

export default connect((state) => {
    return {addressReducer, userReducer} = state;
})(AddressCreateContainer);