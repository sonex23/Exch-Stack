import React from 'react';
import {useSelector} from 'react-redux';

const EodData = () => {

    const eod = useSelector((state) => state.eod.eodList)

    return (
        <>
        <h1>ExchangeList</h1>
        <hr/>
        <p>{console.log(eod)}</p>
        </>
    )
}

export default EodData;