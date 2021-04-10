import exchangesReducer from './exchangesReducer';
import tickersReducer from './tickersReducers';
import eodReducer from './eodReducers';
import intradayReducer from './intradayReducer';

const rootReducer = {
    exchanges: exchangesReducer,
    tickers: tickersReducer,
    eod: eodReducer,
    intraday: intradayReducer,
}

export default rootReducer;