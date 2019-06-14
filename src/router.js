import React,{Component} from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home/index'
import Introduce from './pages/Introduce/index'
import Product from "./pages/Product";
import ServerCase from "./pages/ServerCase";
import AboutUs from "./pages/AboutUs";
import HomeHeader from './compontent/HomeHeader/index'
import Footer from './compontent/Footer/index';



class Routers extends Component{
  render(){
    return (
      <Router>
          <div id="app">
              <HomeHeader/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/introduce" render={props=>(<Introduce props={props} />)}/>
                <Route exact path="/product" render={props=>(<Product props={props} />)}/>
                <Route exact path="/server-case" render={props=>(<ServerCase props={props} />)}/>
                <Route exact path="/about-us" render={props=>(<AboutUs props={props} />)}/>
                {/*<Route render={props=>(<NotFound props={props} />)}/>*/}
              </Switch>
              <Footer/>
          </div>
      </Router>
    )
  }
}

export default Routers
