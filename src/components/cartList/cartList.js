import React, { Component} from 'react';

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
