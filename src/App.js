import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import exchangeActions from "./redux/actions/exchangeActions";
import tickersActions from "./redux/actions/tickersActions";
import ExchangesList from "./components/ExchangeList";
import TickerList from "./components/TickerList";
import eodActions from "./redux/actions/eodActions";
import EodData from "./components/EodData";

import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch API and Store data to Redux
    // API EXCHANGES LIST
    // dispatch(exchangeActions.getExchanges());
    //API ALL TICKERS LIST
    //dispatch(tickersActions.getAllTickers())
    //API TICKERS BY EXCHANGE CODE
    //dispatch(tickersActions.getTickersByExchangeCode('XIDX'))
    //API EOD BY EMITEN/TICKERS CODE AND EXCHANGE CODE
    //dispatch(eodActions.getEodByEmitenSymbolsAndExchange('BBCA','XIDX'))
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
