import { combineReducers } from 'redux'

import products from './products';
import itemEditing from './itemEditing';
import carts from './carts';

 const myReduces = combineReducers({
    products,
    itemEditing,
    carts
});

export default myReduces;


