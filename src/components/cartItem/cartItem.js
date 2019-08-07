import React, { Component} from 'react';
// import { Link } from 'react-router-dom';

class cartItem extends Component {
   
 
    render(){ 
      //  console.log(this.props.cart);
        const {cart, index} = this.props;
        return (
           
                   
            <li className="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
            <div className="product_customs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
                <div><div className="product_number">{index + 1}</div></div>
                <div><div className="product_image_customs"><img src={cart.product.linkImg} alt="" /></div></div>
                <div className="product_name_container_customs">
                <div className="product_name_customs"><a href="product.html">{cart.product.name}</a></div>
                <div className="product_text_customs">{cart.product.description}</div>
                </div>
            </div>
            
            <div className="product_size_customs product_text_customs"><span></span>{cart.product.price} $</div>
            <div className="product_quantity_container">
                <div className="product_quantity ml-lg-auto mr-lg-auto text-center">
                <span className="product_text product_num">1</span>
                <div className="qty_sub qty_button trans_200 text-center"><span>-</span></div>
                <div className="qty_add qty_button trans_200 text-center"><span>+</span></div>
                </div>
            </div>

            <div className="product_total product_text_customs"><span> </span>{cart.product.price * cart.quanlity} $</div>
            <div className="product_size_customs product_text_customs"><span>
            <button type="button" className="btn btn-danger">Delete</button>
            </span></div>
            </li>
                
        );
       }
}


export default cartItem;
