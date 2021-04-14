import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import headExchangeAction from "./redux/actions/headExchangeAction";
import headTickerAction from "./redux/actions/headTickerAction";
import exchangeActions from "./redux/actions/exchangeActions";
import exchangeCountryAction from "./redux/actions/exchangeCountryAction";

import Home from "./pages/Home";
import Eod from "./pages/Eod";
import Markets from "./pages/Markets";
import Tickers from "./pages/Tickers";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 200px;

  @media screen and (max-width: 576px) {
    padding-bottom: 500px;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch API and Store data to Redux

    // API EXCHANGES LIST
    dispatch(exchangeActions.getExchanges());
    //dispatch(exchangeCountryAction.getCountryExchange());

    //API 5 Head Exchange List
    //dispatch(headExchangeAction.get5HeadExchanges());
    //dispatch(headTickerAction.get5HeadTicker());
  }, []);

  return (
    <StyledDiv>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/markets">
              <Markets />
            </Route>
            <Route path="/emiten-list">
              <Tickers />
            </Route>
            <Route path="/details-emiten">
              <Eod />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </StyledDiv>
  );
}

export default App;
