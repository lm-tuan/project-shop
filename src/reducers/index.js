import { combineReducers } from 'redux'
import products from './products';
import itemEditing from './itemEditing';


 const myReduces = combineReducers({
    products,
    itemEditing
});

export default myReduces;


