import * as types from './../contants/typesAction';
import  ApiTypes  from './../ultils/ApiCaller';
import ApiCaller from './../ultils/ApiCaller';

export const actShowProductsRequest = () => {
    return dispatch => {
        return ApiTypes('products', 'GET', null).then(res => {
            
            dispatch(actShowProducts(res.data));
        });
    };
}

export const actShowProducts = (products) => {
    return {
        type : types.SHOW_PRODUCT,
        products
        
    }
}



export const actAddProductRequest = (product) => {

    return dispatch => {
        return ApiTypes('products','POST',product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
    
}

export const actAddProduct = (product) => {
    return {
        type:types.ADD_PRODUCT,
        product
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return ApiTypes(`products/${id}`,'DELETE', null).then(res => {
           
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type:types.DELETE_PRODUCT,
        id
    }
}


export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return ApiCaller(`products/${product.id}`,'PUT',product).then( res => {
            dispatch(actUpdateProduct(res.data));
        })
    }
} 

export const actUpdateProduct = (product) => {
    return {
        type:types.UPDATE_PRODUCT,
        product
    }
}



export const atcGetProductRequest = (id) => {
    return dispatch => {
        return ApiCaller(`products/${id}`,'GET',null).then( res => {
            //console.log(res);
            dispatch(atcGetProduct(res.data));
        })
    }
}

export const atcGetProduct = (product) => {
    return {
        type:types.EDIT_PRODUCT,
        product
    }
}

export const actGetCartRequest = () => {
    return dispatch => {
        return ApiCaller('carts',"GET",null).then(res => {
           
            dispatch(atcGetCart(res.data))
        })
    }
}
export const atcGetCart = (carts) => {
    return {
        type:types.SHOW_CART,
        carts
    }
}


const findIndex = (listCarts, id) => {
    var index = -1;
    listCarts.forEach((cart, i) => {
        if(cart.product.id===id){
            
            index = i;
        }
    });
    return index;
}

const searchCart = (carts, id) => {
    var index = -1;
    carts.forEach((cart, i) => {
        if(cart.product.id===id){
            index = cart.id;
        }
    });
    return index;
}







export const addToCartRequest = (product,listCarts,quanlity) => {
   
    var index = findIndex(listCarts, product.id);
    var id = searchCart(listCarts,product.id);
    //var idCart = searchToCart(listCarts,product.id);

        var cart = {
            id:'',
            product,
            quanlity
        }
    
    return dispatch => {
        if(index === -1){
            
            return ApiCaller('carts',"POST",cart).then(res => {
                console.log(res.data);
                dispatch(addToCart(res.data))
            })
        }
        else
        {
           
            var newCart = {
                id,
                product,
                quanlity
            };
            
            return ApiCaller(`carts/${id}`,"PUT",newCart).then(res => {
                console.log(res.data);
                dispatch(addToCart(res.data))
            })

        }
        
       
       
    }

}

export const addToCart = (cart, quantity) => {
    return {
        type:types.ADD_TO_CART,
        cart
    }
}