import React, { Component} from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import Slide from './components/Slides/Slide';
import Header from './components/Header/Header';
import Featuer from './components/Feature/Feature';
import routes from './routes';
import { Route ,Switch, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {


  ShowContetMenus = (routes) => {
    let result = null;
    if(routes.length > 0 ) {
     
      result = routes.map( (route, index) => {
      
        return <Route 
          key = {index}
          path = {route.path}
          exact = {route.exact}
          component = {route.main}
        /> 
      })
    }
    return  <Switch>{result}</Switch>;;
  }
 render(){
  
  return (
    <Router>
        <div className="App">
          <Menu/>
          <div className="super_container">
          {/* Header */}
          {/* <Header/> */}
          {/* Slides */}
          
          {/* <Slide/> */}

          {/* ProductsList */}
            {/* <ProductList/> */}
            {this.ShowContetMenus(routes)}
          {/* Features */}
          {/* <Featuer/> */}
          {/* Footer */}
          <Footer/>
        </div>

      </div>
    </Router>
  );
 }
}

export default App;
