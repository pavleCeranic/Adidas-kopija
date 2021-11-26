import React, { useEffect } from 'react'
import { NavBar} from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import UserAccount from './Pages/UserAccount';
import ShoppingCart from './Pages/ShoppingCart';
import Test from './Test'
import Help from './Pages/Help';
import Register from './components/Account/Register';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetUser } from "./Store/auth-action";

const App = () => {
  const auth = useSelector((state) => state.auth.isLoggedIn);
  console.log("ovo je auth.isLoggedIn________:",auth)
    const dispatch = useDispatch();
  
  useEffect(() => {
    auth && dispatch(GetUser());
    
  }, [auth, dispatch]);
    return (
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
            <Route path="/register" component={Register} />
            </Switch>
        <Footer />
      </BrowserRouter>
    )
}

export default App
