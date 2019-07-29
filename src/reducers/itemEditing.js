import * as types from './../contants/typesAction';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case types.EDIT_PRODUCT:
            //console.log(action);
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;