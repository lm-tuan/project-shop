import * as types from './../contants/typesAction';

const initialState = [];

// const findIndex = (products, id) => {
//     var index = -1;
//     products.forEach((product, i) => {
//         if(product.id===id){
//             index = i;
//         }
//     });
//     return index;
// }

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_CART:       
            console.log(action);  
            state = action.carts
            return [...state]
       
        default:
            return [...state]
    }
}
export default products;