import exchangesReducer from './exchangesReducer';
import tickersReducer from './tickersReducers';
import eodReducer from './eodReducers';
import intradayReducer from './intradayReducer';
import exchangeMicReducer from './exchangeMicReducer';
import tickerSymbolReducer from './tickerSymbolReducer.js'

const rootReducer = {
    exchanges: exchangesReducer,
    tickers: tickersReducer,
    eod: eodReducer,
    intraday: intradayReducer,
    exchangeMic: exchangeMicReducer,
    tickerSymbol: tickerSymbolReducer
}

export default rootReducer;