import React, { Component} from 'react';


class ProductList extends Component {

 render(){

  return (
    <div className="products">
      <div className="container">
          <div className="row products_row">
            {
              this.props.children
            }    
          </div>
      </div>
    </div>
  );
 }
}

export default ProductList;
