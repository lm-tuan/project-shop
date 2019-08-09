import React, { Component} from 'react';
import {connect } from 'react-redux';

class CartTotal extends Component {
  
    toTalProductCart = (carts) => {
        var total = 0;
        if(carts.length >0) {
            carts.forEach(cart => {
                total += cart.quanlity * cart.product.price;
            });
        }
        return total;
    }

    render(){
        const {carts} = this.props;
        return (
          
                <div className="col-lg-6 cart_extra_col">
                  <div className="cart_extra cart_extra_2">
                    <div className="cart_extra_content cart_extra_total">
                      <div className="cart_extra_title">Cart Total</div>
                      <ul className="cart_extra_total_list">
                        <li className="d-flex flex-row align-items-center justify-content-start">
                          <div className="cart_extra_total_title">Subtotal</div>
                          <div className="cart_extra_total_value ml-auto">${this.toTalProductCart(carts)}</div>
                        </li>
                        <li className="d-flex flex-row align-items-center justify-content-start">
                          <div className="cart_extra_total_title">Shipping</div>
                          <div className="cart_extra_total_value ml-auto">Free</div>
                        </li>
                        <li className="d-flex flex-row align-items-center justify-content-start">
                          <div className="cart_extra_total_title">Total</div>
                          <div className="cart_extra_total_value ml-auto">${this.toTalProductCart(carts)}</div>
                        </li>
                      </ul>
                      <div className="checkout_button trans_200"><a href="checkout.html">Thanh Toán</a></div>
                    </div>
                  </div>
                </div>
        );
       }
}

const mapStateToProps = state => {
    return {
        carts:state.carts
    }
}
export default connect(mapStateToProps, null)(CartTotal);
