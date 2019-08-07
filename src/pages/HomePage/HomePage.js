import React, { Component} from 'react';
// import Menu from './../../components/Menu/Menu';

import img1 from './../../components/Header/images/DBH01.jpg';
import img2 from './../../components/Header/images/DBH02.jpg';
import img3 from './../../components/Header/images/DBH03.jpg';
import {Link} from 'react-router-dom';
// import img4 from './../../components/Header/images/home-dbh-3.jpg';


class HomePage extends Component {

 render(){
 
  return (
    
      <div className="products">
          <header className="masthead text-center text-white">
            <div className="masthead-content">
              <div className="container">
                <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                <Link to = "#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</Link>
              </div>
            </div>
           
          </header>
        <div className="container">
          
          <div className="row products_row">
          <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={img1} alt="" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">For those about to rock...</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={img2} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">We salute you!</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={img3} alt="" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">Let there be rock!</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
           
          </div>
        </div>
      </div> 
  );
 }
}

export default HomePage;
