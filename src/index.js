import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import Restaurant from './restaurantlist'
import OrderPage from './pages/orderPage'
import PreviousOrders from './pages/PreviousOrders'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from 'easy-peasy'
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={App} />
          <Route exact path={'/Restaurantlist'} component={Restaurant} />
          <Route exact path={'/order-page'} component={OrderPage} />
          <Route exact path={'/previous-orders'} component={PreviousOrders} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
