import React, { Component} from 'react';
import { Route ,Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import routes from './routes';

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
            {this.ShowContetMenus(routes)}       
          <Footer/>
        </div>
      </div>
    </Router>
  );
 }
}
export default App;
