import React, { Component} from 'react';
import ProductItem from './../../components/ProductItem/ProductItem';



class HeaderProduct extends Component {

 render(){

  return (
    <div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section_title text-center">Sản phẩm phổ biến <br />DRAGON BALL HEROES </div>
            </div>
          </div>
          <div className="row page_nav_row">
            <div className="col">
              <div className="page_nav">
                <ul className="d-flex flex-row align-items-start justify-content-center">
                  <li className="active"><a href="#">HOME</a></li>
                  <li><a href="#">PROUCTS</a></li>
                  <li><a href="#">CONTACT</a></li>
                </ul>
              </div>
            </div>
          </div>
    </div>     
  );
 }
}

export default HeaderProduct;
