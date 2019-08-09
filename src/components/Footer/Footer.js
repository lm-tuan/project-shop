import React, { Component} from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component {

 render(){

  return (
    <footer className="footer">
          <div className="footer_content">
            <div className="container">
              <div className="row">
              
                <div className="col-lg-4 footer_col">
                  <div className="footer_about">
                    <div className="footer_logo">
                      <Link to="/">
                        <div className="d-flex flex-row align-items-center justify-content-start">
                          <div className="footer_logo_icon"><img src="images/logo_2.png" alt="" /></div>
                          <div>DRAGON BALL</div>
                        </div>
                      </Link>		
                    </div>
                    <div className="footer_about_text">
                      <p>Các sản phẩm điều được trang bị đầy đủ phụ kiện và chất liệu rất đẹp.</p>
                    </div>
                  </div>
                </div>
             
                <div className="col-lg-4 footer_col">
                  <div className="footer_menu">
                    <div className="footer_title">Support</div>
                    <ul className="footer_list">
                      <li>
                        <Link to="/"><div>Mua bán trực tuyến</div></Link>
                      </li>
                      <li>
                        <Link to="/"><div>Sản phẩm chất lượng</div></Link>
                      </li>
                      <li>
                        <Link to="/"><div>Hướng dẫn sử dụng</div></Link>
                      </li>
                      <li>
                        <Link to="/"><div>Contact</div></Link>
                      </li>
                    </ul>
                  </div>
                </div>
               
                <div className="col-lg-4 footer_col">
                  <div className="footer_contact">
                    <div className="footer_title">Stay in Touch</div>
                    <div className="newsletter">
                      <form action="#" id="newsletter_form" className="newsletter_form">
                        <input type="email" className="newsletter_input" placeholder="Subscribe to our Newsletter" required="required" />
                        <button className="newsletter_button">+</button>
                      </form>
                    </div>
                    <div className="footer_social">
                      <div className="footer_title">Social</div>
                      <ul className="footer_social_list d-flex flex-row align-items-start justify-content-start">
                        <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                        <li><Link to="/"><i className="fa fa-youtube-play" aria-hidden="true" /></Link></li>
                        <li><Link to="/"><i className="fa fa-google-plus" aria-hidden="true" /></Link></li>
                        <li><Link to="/"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bar">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                    <div className="copyright order-md-1 order-2">
                      Copyright © by ReactTuan <i className="fa fa-heart-o" aria-hidden="true" /> 
                      </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
  );
 }
}

export default Footer;
