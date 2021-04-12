import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import tickersActions from "../redux/actions/tickersActions";
import tickerSymbolActions from '../redux/actions/tickerSymbolActions';

const TableAllTicker= () => {
    const dispatch = useDispatch();

    const tickerList = useSelector((state) => state.tickers.tickersList);
    const exchangeMic = useSelector((state) => state.exchangeMic.exchangeMic);
    const symbol = useSelector((state) => state.tickerSymbol.tickerSymbol);

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
                            <th>Action</th>
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
                                    <td>
                                        <button 
                                         className="btn btn-primary" 
                                         onClick={(e)=>dispatch(tickerSymbolActions.storeSymbol(data.symbol))}
                                        >
                                        <Link to="/details-emiten" style={{ textDecoration: 'none', color: 'white' }}>
                                        Daily
                                        </Link>
                                        </button>
                                        <Link to=""> 
                                        <button 
                                        className="btn btn-primary" 
                                        >Intraday</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                        }
                        {console.log(symbol)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableAllTicker;
