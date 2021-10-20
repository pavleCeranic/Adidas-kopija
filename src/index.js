import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { NavBar} from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import UserAccount from './Pages/UserAccount';
import ShoppingCart from './Pages/ShoppingCart';
import Test from './Test'
import Help from './Pages/Help';


ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter>
    <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/wishlist"  component={Wishlist} />
          <Route path="/useraccount"   component={UserAccount} />
          <Route path="/shoppingcart"  component={ShoppingCart} />
          <Route path="/test"  component={Test} />
          <Route path="/help"  component={Help} />
        </Switch>
        <Footer />
      </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

