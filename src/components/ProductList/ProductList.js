import React, { Component} from 'react';
import ProductItem from './../ProductItem/ProductItem';



class ProductList extends Component {

 render(){
  //console.log(this.props.children);
  return (
  
      <div className="products">
        <div className="container">
          <div className="row products_row">
            {/* Product */}

            {this.props.children}
           
          </div>
      </div>
      </div>
  );
 }
}

export default ProductList;
