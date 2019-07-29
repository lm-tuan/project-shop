import React, { Component} from 'react';



class Featuer extends Component {

 render(){

  return (

      <div className="features">
        <div className="container">
          <div className="row">
            {/* Feature */}
            <div className="col-lg-4 feature_col">
              <div className="feature d-flex flex-row align-items-start justify-content-start">
                <div className="feature_left">
                  <div className="feature_icon"><img src="images/icon_1.svg" alt="" /></div>
                </div>
                <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                  <div className="feature_title">Thánh toán an toàn</div>
                </div>
              </div>
            </div>
            {/* Feature */}
            <div className="col-lg-4 feature_col">
              <div className="feature d-flex flex-row align-items-start justify-content-start">
                <div className="feature_left">
                  <div className="feature_icon ml-auto mr-auto"><img src="images/icon_2.svg" alt="" /></div>
                </div>
                <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                  <div className="feature_title">Sản phẩm cao cấp</div>
                </div>
              </div>
            </div>
            {/* Feature */}
            <div className="col-lg-4 feature_col">
              <div className="feature d-flex flex-row align-items-start justify-content-start">
                <div className="feature_left">
                  <div className="feature_icon"><img src="images/icon_3.svg" alt="" /></div>
                </div>
                <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                  <div className="feature_title">Giao hàng miễn phí</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
 }
}

export default Featuer;
