import React, {useEffect} from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import exchangeActions from './redux/actions/exchangeActions';
import tickersActions from './redux/actions/tickersActions';
import ExchangesList from './components/ExchangeList';
import TickerList from './components/TickerList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch API and Store data to Redux 

    // API EXCHANGES LIST
    //dispatch(exchangeActions.getExchanges())

    //API ALL TICKERS LIST
    //dispatch(tickersActions.getAllTickers())

    //API TICKERS BY EXCHANGE CODE
    //dispatch(tickersActions.getTickersByExchangeCode('XIDX'))
  })

  return (
    <div className="App">
      <TickerList/>
    </div>
  );
}

export default App;
