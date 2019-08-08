import React, { Component} from 'react';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';
import CartItem from './../cartItem/cartItem';


class cartList extends Component {
  

  
    render(){

        return (
            <div className="cart_items">
            <ul className="cart_items_list">
              
              {
                  this.props.children
              }
              
            </ul>
          </div>
        );
       }
}


export default cartList;
