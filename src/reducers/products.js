import * as types from './../contants/typesAction';

const initialState = [];

// function find index product in prodcuts
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

        //display products
        case types.SHOW_PRODUCT:        
            state = action.products
            return [...state]
        //add product in products
        case types.ADD_PRODUCT:       
            state = [...state,action.product];
            return [...state] ;

        //delete a product from products  
        case types.DELETE_PRODUCT:  
        var index = findIndex(state,action.id);     
        state = [...state.slice(0, index), ...state.slice(index+1)];
        return [...state];

        //update a product in products
        case types.UPDATE_PRODUCT:  
        var idex = findIndex(state,action.product.id);     
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
            return [...state];  
            
        default:
            return [...state]
    }
}
export default products;