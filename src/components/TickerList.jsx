import React from 'react';
import {useSelector} from 'react-redux';

const TickerList = () => {

    const tickers = useSelector((state) => state.tickers.tickersList)

    return (
        <>
        <h1>ExchangeList</h1>
        <hr/>
        <p>{console.log(tickers)}</p>
        </>
    )
}

export default TickerList;