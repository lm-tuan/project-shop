import React, { Component} from 'react';
import {Link, Route } from 'react-router-dom';
import * as typesAPI from './../../contants/ApiTypes';
import imgSearch from './../Header/images/search.png';
import imgUser from './../Header/images/user.svg';
import imgCart from './../Header/images/cart.svg';
import imgPhone from './../Header/images/phone.svg';
import { connect} from 'react-redux';




const menus = [
    {
      name:'HOME',
      to:'/',
      exact:true
    },
    {
      name:'PRODUCTS',
      to:'/products',
      exact:false
    },
    
   {
      name:'CONTACT',
      to:'/contact',
      exact:false
    },
    {
      name:'LOGIN',
      to:'/login',
      exact:false
    }

]
const MenuLink = ({lable,to,activeOnlyWhenAxact}) => {
  return (
    <Route
      path = {to}
      exact = {activeOnlyWhenAxact}
      children = {({match}) =>{
        var active = match?  'active' : '';
        return (
          <li className = {active}>
              <Link to = {to} > 
                  {lable}
              </Link>
          </li>
        ); 
      }}
    />
  );
}

class Menu extends Component {

  ShowMenuLink = (menus) => {
    let result = null;
    if(menus.length > 0) {
      result = menus.map((menu, index) => {
          return <MenuLink 
                 key = {index}
                  to = {menu.to}
                  activeOnlyWhenAxact = {menu.exact}
                  lable = {menu.name}
          />
      })
    }
    return result;
  }
  

 render(){
  
  return (
    <div>
    {/* Menu */}
    <div className="menu">
      {/* Search */}
      <div className="menu_search">
        <form action="#" id="menu_search_form" className="menu_search_form">
          <input type="text" className="search_input" placeholder="Search Item" required="required" />
          <button className="menu_search_button"><img src={imgSearch} alt="" /></button>
        </form>
      </div>
      {/* Navigation */}
      
      {/* Contact Info */}
      <div className="menu_contact">
        <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
          <div><div><img src="images/phone.svg" alt="phone" /></div></div>
          <div>+035-912-4552</div>
        </div>
        
      </div>
    </div>
    <div className="super_container">
      {/* Header */}
      <header className="header">
        <div className="header_overlay" />
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            <Link to="/">
              <div className="d-flex flex-row align-items-center justify-content-start">
                <div><img src="images/logo_1.png" alt="logo" /></div>
                <div>DRAGON BALL FIGURE</div>
              </div>
            </Link>	
          </div>
        
          <nav className="main_nav">
            <ul className="d-flex flex-row align-items-start justify-content-start">
            {/* <li className="active"><a href="#">HOME</a></li>
            <li><a href="#">PRODUCTS</a></li>
            <li><a href="#">CONTACT</a></li> */}
            {this.ShowMenuLink(menus)}
            </ul>
          </nav>
          <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
            {/* Search */}
            <div className="header_search">
              <form action="#" id="header_search_form">
                <input type="text" className="search_input" placeholder="Search Item" required="required" />
                <button className="header_search_button"><img src={`${typesAPI.URL_IMG}/images/search.png`} alt="" /></button>
              </form>
            </div>
            {/* User */}
            <div className="cart"><Link to="/"><div><img src={imgUser}  alt="userfont" /><div></div></div></Link></div>
            {/* Cart */}
           
            <div className="user"><Link to="/carts"><div><img src={imgCart} alt="cartfont" /> <div>{this.props.carts.length ===0 ?'!':this.props.carts.length}</div></div></Link></div>
            {/* Phone */}
            <div className="header_phone d-flex flex-row align-items-center justify-content-start">
              <div><div><img src={imgPhone} alt="imgphone"  /></div></div>
              <div>+0-359-124-552</div>
            </div>
          </div>
        </div>
      </header>
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
   return {}
}

export default connect(mapStateToProps,mapDispathToProps)(Menu);
