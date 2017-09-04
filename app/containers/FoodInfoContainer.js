/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import React from 'react';
import { connect } from 'react-redux';
import FoodInfo from '../pages/FoodInfo';

class FoodInfoContainer extends React.Component {
    render() {
        return <FoodInfo {...this.props} />
    }
}

export default connect((state)=>{
    const { FoodInfo } = state;
    return { FoodInfo };
})(FoodInfoContainer);