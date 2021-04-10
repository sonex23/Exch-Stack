import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ExchangeList = () => {

    const Exchanges = useSelector((state) => state.exchanges.exchangesList)

    return (
        <>
        <h1>ExchangeList</h1>
        <hr/>
        {console.log(Exchanges)}
        <p>{Exchanges}</p>
        </>
    )
}

export default ExchangeList;