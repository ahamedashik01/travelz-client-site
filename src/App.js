import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/pages/NotFound/NotFound';
import Login from './components/pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/pages/Login/Register/Register';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/pages/MyOrders/MyOrders';
import AllOrders from './components/pages/AllOrders/AllOrders';
import NewPackage from './components/pages/NewPackage/NewPackage';
import PackageDetails from './components/PackageDetails/PackageDetails';
import Booking from './components/pages/Booking/Booking';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/packages/:id">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/my-order">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manage-all-order">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-packages">
              <NewPackage></NewPackage>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
