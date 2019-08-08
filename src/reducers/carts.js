import * as types from './../contants/typesAction';

const initialState = [];

    const findIndex = (carts, id) => {
        var index = -1;
        carts.forEach((cart, i) => {
            if(cart.product.id===id){
                index = i;
            }
        });
        return index;
    }

const carts = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_CART:       
        state = action.carts
        return [...state]


        case types.ADD_TO_CART: 
        var index = findIndex(state,action.product.id);
        console.log(index);
       
        console.log(action);

        if(index === -1) {
            var cart = {
                
                product:action.product,
                quanlity:action.quanlity
            }
            console.log(cart);
            state = [...state, cart];
            console.log(state);

        }else{

            var cart = {
                
                product:action.product,
                quanlity:action.quanlity
            }
            
            state = [
                ...state.slice(0, index),
                {
                   ...cart,
                   quanlity:++action.quanlity
                    
                },
                ...state.slice(index +1)
            ];
            
        }

        return [...state];
        
       
        default:
            return [...state]
    }
}

export default carts;