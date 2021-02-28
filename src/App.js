import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';
import ProductLayout from './layouts/ProductLayout';

// pages
import Homepage from './pages/Homepage';
import About from './pages/About';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Reset from './pages/Reset';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Order from './pages/Order';
import './default.scss';

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route path="/about" render={() => (
          <MainLayout>
            <About />
          </MainLayout>
        )} />
        <Route exact path="/shop" render={() => (
          <MainLayout>
            <Shop />
          </MainLayout>
        )} />
        <Route path="/shop/:filterType" render={() => (
          <MainLayout>
            <Shop />
          </MainLayout>
        )} />
        <Route path="/product/:productID" render={() => (
          <ProductLayout>
            <Product />
          </ProductLayout>
        )} />
        <Route path="/cart" render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
        )} />
        <Route path="/payment" render={() => (
          <WithAuth>
            <MainLayout>
              <Payment />
            </MainLayout>
          </WithAuth>
        )} />
        <Route path="/signup" render={() => (
          <MainLayout>
            <SignUp />
          </MainLayout>
        )} />
        <Route path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
        <Route path="/Reset" render={() => (
          <MainLayout>
            <Reset />
          </MainLayout>
        )} />
        <Route path="/orders" render={() => (
          <WithAuth>
            <MainLayout>
              <Orders />
            </MainLayout>
          </WithAuth>
        )} />
        <Route path="/order/:orderID" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Order />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
      </Switch>
    </div>
  );
}

export default App;
