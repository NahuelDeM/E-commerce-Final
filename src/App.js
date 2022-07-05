import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Products from "./Pages/Products";
import CheckoutPage from "./Pages/CheckoutPage";
import HeroSection from "./components/HeroSection";
import PaymentForms from "./Pages/PaymentForms";
import Gracias from "./Pages/Gracias";
import Elegir from "./Pages/Elegir";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <HeroSection />
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/Gracias'>
            <Gracias />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/home'>
            <HeroSection />
          </Route>
          <Route path='/checkout-page'>
            <CheckoutPage />
          </Route>
          <Route path='/Elegir'>
            <Elegir />
          </Route>
          <Route path='/checkout'>
            <PaymentForms />
          </Route>
          <Route path='/'>
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
