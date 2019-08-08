import React, { Component} from 'react';

// import ApiCaller from './../../ultils/ApiCaller';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as  actions from './../../actions/index';
// import imgSearch from './../../components/Header/images/search.png';
// import imgUser from './../../components/Header/images/user.svg';
import imgCart from './../../components/Header/images/cart.svg';
// import imgPhone from './../../components/Header/images/phone.svg';
import imgHeart from './../../components/Header/images/heart_2.svg';
import { thisExpression } from '@babel/types';


class ProductDetailPage extends Component {

    constructor(props){
        super();
        this.state = {
            id:'',
            txtName:'',
            numberPrice:'',
            numberRating:'',
            fileImg:'',
            description:'',
           
           
        };
    }

    componentDidMount(){
       
        var {match} = this.props;
        if(match){
            this.props.atcGetProductRequest(match.params.id)
        }
    }
    componentWillReceiveProps(nextProps){
        
        if(nextProps){
            let {id, name,price,rating,linkImg,description} = nextProps.itemEditing;
            this.setState({
              id,
              txtName:name,
              numberPrice:price,
              numberRating:rating,
              fileImg:linkImg,
              description
            })
        }
        
    }

    onSearChProductToCart = (carts, id) => {
      var result = null;
      carts.forEach((cart, i) => {
          if(cart.product.id===id){
            result = cart;
           
          }
      });
      return result;
    }

    onAddToCart = (product) => {
      let {id,txtName,numberPrice,numberRating,fileImg,description} = product;
      let newProduct = {
        id,
        name:txtName,
        price:numberPrice,
        rating:numberRating,
        linkImg:fileImg,
        description
        
      }
      var quanlityNew = 0;
      //console.log(this.onSearChProductToCart(this.props.carts,product.id));
      var cart = this.onSearChProductToCart(this.props.carts,product.id);
      if(cart=== null) {
        quanlityNew = 0;

      }else{
        quanlityNew = cart.quanlity;
      }
      
      if(window.confirm("Bạn có muốn thêm sản phẩm vào giỏ hàng hay không ?")){

        this.props.onAddToCartRequest(newProduct,this.props.carts,quanlityNew + 1);
        this.props.history.push({ pathname: '/carts' })
      }
     
     
    }
    
    render(){
        console.log(this.props.carts)
        return (
 
            <div className="super_container_inner">
            {/* Product */}
            <div className="product">
              <div className="container">
                <div className="row">
                  {/* Product Image */}
                  <div className="col-lg-6">
                    <div className="product_image_slider_container">
                      <div id="slider" className="flexslider">
                        <ul className="slides">
                          <li>
                          <img src={`./../${this.state.fileImg}`} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="col-lg-6 product_col_customs">
                    <div className="product_info">
                      <div className="product_name">NOTE in DBSH01</div>
                      <div className="product_rating_container d-flex flex-row align-items-center justify-content-start">
                        <div className="rating_r rating_r_4 product_rating"><i /><i /><i /><i /><i /></div>
                       
                      </div>
                      <div className="product_price"> Price: {this.state.numberPrice} $</div>
                      
                      <div className="product_text">
                         <p>{this.state.description}</p>
                      </div>
                      <div className="product_buttons">
                      <div className="text-right d-flex flex-row align-items-start justify-content-start">
                        <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                        <div><div><img src={imgHeart} className="svg" alt="" /><div>+</div></div></div>
                    </div>
                        <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                        <div><div>
                            <Link onClick = {() => this.onAddToCart(this.state)} > <img src={imgCart} className="svg" alt="" /> </Link> <div>+</div></div></div>
                        </div>
                        </div>
                      </div>
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
        products:state.products,
        itemEditing:state.itemEditing,
        carts:state.carts
    }
  }
  const mapDispatchToProps = (dispatch, props) => {
    return {
        
        atcGetProductRequest:(id) => {
            return dispatch(actions.atcGetProductRequest(id));
        },
        onAddToCartRequest: (product, listCarts,quanlity) => {
          return dispatch(actions.addToCartRequest(product,listCarts,quanlity))
        }
  
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailPage);
