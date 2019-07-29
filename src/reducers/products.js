import * as types from './../contants/typesAction';

const initialState = [];

const findIndex = (products, id) => {
    var index = -1;
    products.forEach((product, i) => {
        if(product.id===id){
            index = i;
        }
    });
    return index;
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_PRODUCT:       
            //console.log(action);  
            state = action.products
            return [...state]
        case types.ADD_PRODUCT:       
          //  console.log(action);  
            state = [...state,action.product];
            return [...state] ;

        case types.DELETE_PRODUCT:  
        var index = findIndex(state,action.id);     
        state = [...state.slice(0, index), ...state.slice(index+1)];
        return [...state];

        case types.UPDATE_PRODUCT:  
        var idex = findIndex(state,action.product.id);     
       // state = [...state.slice(0, index), ...state.slice(index+1)];
      // console.log(idex);
        state = [...state.slice(0, idex),
            {
                ...action.product,
                name:action.product.name,
                rating:action.product.rating ,
                price: action.product.price,
                description: action.product.description,
                linkImg: action.product.linkImg
            }
            , ...state.slice(idex+1)];
           // console.log(state);
        return [...state];

        
        default:
            return [...state]
    }
}
export default products;