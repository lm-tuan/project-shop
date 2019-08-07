import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as  actions from './../../actions/index';




class ProductItem extends Component {
  onDeleteProduct = (id) => {
    //console.log(this.props.actDeleteProductRequest(id));

    this.props.onDeleteProduct(id);
  }

  onEditProduct = (id) => {
    //console.log(id);
    this.props.onEditProduct(id);
  }
 render(){
 
  const {product} =  this.props;
  console.log(product);
 
  return (
  
    <div className="col-xl-4 col-md-6">
    <div className="product customs">
      <div className="product_image"><img src={product.linkImg} alt="" /></div>
      <div className="product_content">
        <div className="product_info d-flex flex-row align-items-start justify-content-start">
          <div>
            <div>
              <div className="product_name">
                <Link to={`product/${product.id}`}>{product.name}</Link></div>
            </div>
          </div>
          <div className="ml-auto text-right">
            <div className={`rating_r rating_r_${product.rating} home_item_rating`}><i /><i /><i /><i /><i /></div>
            <div className="product_price text-right">{product.price}<span>$</span></div>
          </div>
        </div>
        <div className="product_buttons">
          <div className="text-right d-flex flex-row align-items-start justify-content-start">
            <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
              <div><div><img src="images/heart_2.svg" className="svg" alt="" /><div>+</div></div></div>
            </div>
            <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
              <div><div>
              <Link to={`product/${product.id}`}>
                   <img src="images/cart.svg" className="svg" alt="" />
                </Link> 
                <div>+</div></div></div>
            </div>
          </div>
        </div>
        <div className="product_buttons customs">
          <div className="text-right d-flex flex-row align-items-start justify-content-start">
            <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
              <div><div><Link to={`product/${product.id}/edit`} onClick = {() => this.onEditProduct(product.id)} className="btn btn-outline-info">	Edit</Link></div></div>
            </div>
            <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
              <div><div><button onClick = {() => this.onDeleteProduct(product.id)} className="btn btn-outline-danger">	Delete</button></div></div>
            </div>
          </div>
        </div>
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
      
      atcGetProductRequest:(id) => {
        return dispatch(actions.atcGetProductRequest(id));
    }

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);

