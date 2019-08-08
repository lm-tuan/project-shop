import * as types from './../contants/typesAction';

const initialState = [];

    const findIndex = (carts, id) => {
        var index = -1;
        carts.forEach((cart, i) => {
            if(cart.id===id){
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
        console.log(action);
        console.log(state);
         var index = findIndex(state,action.cart.id);
         console.log(index);
       
        console.log(action);

        if(index === -1) {
            console.log('th1');
            state = [...state, action.cart];
            console.log(state);

        }else{
            console.log('th2');
            state = [
                ...state.slice(0, index),
                {
                   ...action.cart,
                   quanlity:action.cart.quanlity++
                    
                },
                ...state.slice(index +1)
            ];

            console.log(state);
            
        }

        return [...state];
        
       
        default:
            return [...state]
    }
}

export default carts;