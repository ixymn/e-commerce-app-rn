/**
 * shop-rn
 *
 * @author Feng Ye
 * @date 2016-08-13
 

 * @license The MIT License (MIT)
 */

import { AsyncStorage } from 'react-native';

let UserDefaults = {
    setObject: (key, value) => {
        const jsonValue = JSON.stringify(value);
        return AsyncStorage.setItem(key, jsonValue, (error) => {
            // console.log(key + ' setOrRemoveObject error: ' + error);
        });
    },

    cachedObject: (key) => {
        return AsyncStorage.getItem(key)
            .then((data, error) => {
                if (data) return JSON.parse(data);
                
                // console.log(key + ' cachedObject error: ' + error);
                return null;
            })
    },

    clearCachedObject: (key) => {
        return AsyncStorage.removeItem(key);
    },
}

export default UserDefaults;