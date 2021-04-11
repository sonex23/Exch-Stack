import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tickersActions from "../redux/actions/tickersActions";

const TableAllTicker= () => {
    const dispatch = useDispatch();

    const tickerList = useSelector((state) => state.tickers.tickersList);
    const exchangeMic = useSelector((state) => state.exchangeMic.exchangeMic);

    useEffect(()=>{
        dispatch(tickersActions.getTickersByExchangeCode(exchangeMic));
    },[exchangeMic])
    
    return (
        <div>
            <div className="card shadow p-3">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Exchange</th>
                            <th>Exchange Mic</th>
                            <th>Country</th>
                            <th>City</th>
                            <th>Website</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tickerList.map((data, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.symbol}</td>
                                    <td>{data.stock_exchange.name}</td>
                                    <td>{data.stock_exchange.mic}</td>
                                    <td>{data.stock_exchange.country}</td>
                                    <td>{data.stock_exchange.city}</td>
                                    <td>{data.stock_exchange.website}</td>
                                    <td><button className="btn btn-primary">EOD</button> <button className="btn btn-primary">Intraday</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableAllTicker;
