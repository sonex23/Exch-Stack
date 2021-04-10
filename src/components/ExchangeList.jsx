import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ExchangeList = () => {

    const Exchanges = useSelector((state) => state.exchanges.exchangesList)

    return (
        <>
        <h1>ExchangeList</h1>
        <hr/>
        <p>{console.log(Exchanges)}</p>
        </>
    )
}

export default ExchangeList;