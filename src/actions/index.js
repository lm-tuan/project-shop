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