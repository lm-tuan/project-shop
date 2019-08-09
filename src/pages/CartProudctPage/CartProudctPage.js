import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from './../../actions/index';
import CartList from './../../components/cartList/cartList';
import CartItem from './../../components/cartItem/cartItem';
import CouponCart from './../../components/CouponCart/CouponCart';
import CartTotal from './../../components/CartTotal/CartTotal'


class CartProudctPage extends Component {
  
    componentDidMount(){
        this.props.actGetCartRequest();
    }


    
    ShowContentCart = (carts) => {
      let result  = null;
        if(carts.length > 0) {
          
            result = carts.map((cart, index)  => {
                return <CartItem 
                            key = {index}
                            cart = {cart}  
                            index = {index} 
                        />
            })
        } 
        return result;
    }
    
    render(){
        const {carts} = this.props;
        return (
          <div className="super_container_inner">
            <div className="super_overlay" />
            {/* Home */}
            <div className="home">
              <div className="home_container d-flex flex-column align-items-center justify-content-end">
                <div className="home_content text-center">
                  <div className="home_title">Shopping Cart</div>
                  <div className="breadcrumbs d-flex flex-column align-items-center justify-content-center"> 
                  </div>
                </div>
              </div>
            </div>
          {/* Cart */}
            <div className="cart_section">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="cart_container">
                      {/* Cart Bar */}
                      <div className="cart_bar">
                        <ul className="cart_bar_list item_list d-flex flex-row align-items-center justify-content-end">
                          <li className="mr-auto">Product</li> 
                          <li>Price</li>
                          <li>Quantity</li>
                          <li>Total</li>
                          <li>Action</li>
                        </ul>
                      </div>
                      <CartList>
                            {this.ShowContentCart(carts)}
                      </CartList>
                      <div className="cart_buttons d-flex flex-row align-items-start justify-content-start">
                        <div className="cart_buttons_inner ml-sm-auto d-flex flex-row align-items-start justify-content-start flex-wrap">
                          <div className="button button_clear trans_200"><Link to="/products">Buy Products</Link></div>
                          <div className="button button_continue trans_200"><Link to="/">Back Home</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row cart_extra_row">
                <CouponCart/>
                <CartTotal/> 
                </div>
              </div>
            </div>
          </div> 
        );
       }
}

const mapStateToProps = state =>  {
   return {
            carts:state.carts
        }
}

const mapDispathToProps = (dispatch, props) => {
    return {
        actGetCartRequest: () => dispatch(actions.actGetCartRequest())
    }
}

export default connect(mapStateToProps,mapDispathToProps)(CartProudctPage);
