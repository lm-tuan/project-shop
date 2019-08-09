import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductItem from './../../components/ProductItem/ProductItem';
import ProductList from './../../components/ProductList/ProductList';
import * as  actions from './../../actions/index';


class ProductListPage extends Component {
   
    componentDidMount(){
      
        this.props.actShowProductsRequest();
    }

    findIndex = (products, id) => {
        let result = -1;
        for(var i = 0; i<products.length; i++){
            if(products[i].id === id) {
                result = i;
            }
        }
        return result;
    } 

    onDeleteProduct = (id) => {
        if(window.confirm("Bạn có muốn xóa sản phẩm này không ?")){
            this.props.actDeleteProductRequest(id);     
        }
    }

    onEditProduct = (id) => {
         this.props.onEditProduct(id);  
    }
  
    ShowContentProducts = (products) => {
        let result  = null;
        if(products.length > 0) {
          
            result = products.map((product, index)  => {
                return <ProductItem 
                            key = {index}
                            product = {product}
                             onDeleteProduct  = {this.onDeleteProduct}
                             onEditProduct = {this.onEditProduct}
                            
                        />
            })
        }
        return result;
    }


 render(){
   const {products} = this.props;
    
  return (
      <div className="products">
        <div className="container">
          <div className="row products_row"> 
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row load_more_row">
                <div className="col">
                    <div className="button load_more"><Link to= "/product/add"  >ADD ITEM</Link></div>
                </div>
            </div>
            </div>
                <ProductList> 
                    {this.ShowContentProducts(products)}
                </ProductList>
            </div>
        </div>
      </div>
  );
 }
}


const mapStateToProps = state => {
    return {
        products:state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actShowProductsRequest: () => {
            return dispatch(actions.actShowProductsRequest());
        },
        actDeleteProductRequest:(id) => {
            return dispatch(actions.actDeleteProductRequest(id));
        },
        onEditProduct: (id) => {
            return dispatch(actions.atcGetProductRequest(id));
        }    
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
