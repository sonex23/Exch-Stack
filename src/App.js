import React, {useEffect} from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import exchangeActions from './redux/actions/exchangeActions'
import ExchangesList from './components/ExchangeList'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch API and Store data to Redux 
    //API EXCHANGES LIST
    //dispatch(exchangeActions.getExchanges())
  })

  return (
    <div className="App">
      <ExchangesList/>
    </div>
  );
}

export default App;
